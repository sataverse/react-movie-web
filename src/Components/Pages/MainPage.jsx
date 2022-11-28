import React, { useState, useEffect } from 'react'
import MainPageTemplate from '../Templates/MainPageTemplate'
import CardStore from '../../Modules/CardStore'

let koMovieData = []
let koTVData = []
let playlists = []
let playlistMovieData = []
let TepmBannerListData = []

function MainPage({ loginStatus }) {
    const [trendMovies, setTrendMovies] = useState([])
    const [trendTvs, setTrendTvs] = useState([])
    const [playlistList, setPlaylistList] = useState([])
    const [playlistMovies, setPlaylistMovies] = useState([])
    const [bannerList, setBannerList] = useState([]) // 백엔드에서 가져온 리스트
    const [bannerListData, setBannerListData] = useState([]) // API에서 가져온 리스트
    const [isLoaded, setIsLoaded] = useState(false)

    async function isImageLoaded() {
        if (CardStore.isLoaded == true) setIsLoaded(true)
    }

    useEffect(() => {
        async function getMovieData() {
            let responseMovie = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=6199da9940f55ef72ddc1512ea6eca9a')
            let enMovieData = await responseMovie.json()
            let elementResult

            for (const element of enMovieData.results) {
                let ifNoOverview = false
                await fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((data) => {
                        elementResult = data
                        if (data.overview == '') ifNoOverview = true
                    })
                if (ifNoOverview == true) {
                    await fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult.overview = data.overview
                        })
                }
                koMovieData.push(elementResult)
            }
            CardStore.increaseMaxCount(koMovieData.length)
            setTrendMovies(koMovieData)
        }
        async function getTVData() {
            let responseTV = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=6199da9940f55ef72ddc1512ea6eca9a')
            let enTVData = await responseTV.json()
            for (const element of enTVData.results) {
                let elementResult
                let ifNoOverview = false
                try {
                    await fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult = data
                            if (data.overview == '') ifNoOverview = true
                        })
                    if (ifNoOverview == true) {
                        await fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                            .then((response) => response.json())
                            .then((data) => {
                                elementResult.overview = data.overview
                            })
                    }
                    koTVData.push(elementResult)
                } catch (error) {}
            }
            CardStore.increaseMaxCount(koTVData.length)
            setTrendTvs(koTVData)
        }

        async function getPlaylistFromDB() {
            await fetch('http://13.209.26.226/v1/playlist', { method: 'GET' })
                .then((response) => response.json())
                .then((data) => {
                    playlists = []
                    if (!data) {
                        setPlaylistList(playlists)
                        return
                    }
                    data.forEach((element) => {
                        if (element.Playlist.length != 0) {
                            const arr = element.Playlist.split(',')
                            playlists.push({ id: element.Id, title: element.Name, playlist: arr, type: element.Type })
                            setPlaylistList(playlists)
                        }
                    })
                })
        }

        async function clearArray() {
            koMovieData = []
            koTVData = []
            playlists = []
            playlistMovieData = []
        }

        clearArray()
        getMovieData()
        getTVData()
        getPlaylistFromDB()
    }, [])

    async function getPlaylistFromDB() {
        await fetch('http://13.209.26.226/v1/playlist', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                playlists = []
                if (!data) {
                    setPlaylistList(playlists)
                    return
                }
                data.forEach((element) => {
                    if (element.Playlist.length != 0) {
                        const arr = element.Playlist.split(',')
                        playlists.push({ id: element.Id, title: element.Name, playlist: arr, type: element.Type })
                        setPlaylistList(playlists)
                    }
                })
            })
    }

    async function getBannerDataFromDB() {
        await fetch('http://13.209.26.226/v1/banner', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setBannerList(data)
                console.log(data)
            })
    }

    async function getPlaylistMovieData() {
        for (const playlist of playlistList) {
            let resultPlaylistArray = []
            for (const element of playlist.playlist) {
                let elementResult
                let ifNoOverview = false
                try {
                    await fetch(`https://api.themoviedb.org/3/${playlist.type}/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult = data
                            if (data.overview == '') ifNoOverview = true
                        })
                    if (ifNoOverview == true) {
                        await fetch(
                            `https://api.themoviedb.org/3/${playlist.type}/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`
                        )
                            .then((response) => response.json())
                            .then((data) => {
                                elementResult.overview = data.overview
                            })
                    }
                    resultPlaylistArray.push(elementResult)
                } catch (error) {}
            }
            playlistMovieData.push({ title: playlist.title, type: playlist.type, playlistData: resultPlaylistArray })
        }
        CardStore.increaseMaxCount(playlistMovieData.length)
        setPlaylistMovies(playlistMovieData)
    }

    async function getBannerData() {
        let resultBannerList = []
        for (const list of bannerList) {
            let ifNoOverview = false
            let elementResult
            try {
                await fetch(`https://api.themoviedb.org/3/${list.Type}/${list.MovieId}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((data) => {
                        elementResult = data
                        elementResult.type = list.Type
                        elementResult.comment = list.Comment
                        if (data.overview == '') ifNoOverview = true
                    })
                if (ifNoOverview == true) {
                    await fetch(`https://api.themoviedb.org/3/${list.Type}/${list.MovieId}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult.overview = data.overview
                        })
                }
                resultBannerList.push(elementResult)
            } catch (error) {}
        }
        setBannerListData(resultBannerList)
    }

    useEffect(() => {
        getPlaylistFromDB()
        getBannerDataFromDB()
    }, [])

    useEffect(() => {
        setPlaylistMovies([])
        getPlaylistMovieData()
    }, [playlistList])

    useEffect(() => {
        setBannerListData([])
        getBannerData()
    }, [bannerList])

    return (
        <MainPageTemplate
            trendMovies={trendMovies}
            trendTvs={trendTvs}
            playlistMovies={playlistMovies}
            playlistList={playlistList}
            isImageLoaded={isImageLoaded}
            isLoaded={isLoaded}
            loginStatus={loginStatus}
            bannerData={bannerListData}
        />
    )
}

export default MainPage
