import React, { useState, useEffect } from 'react'
import MainPageTemplate from '../Templates/MainPageTemplate'
import CardStore from '../../Modules/CardStore'

let koMovieData = []
let koTVData = []
let playlists = []
let playlistMovieData = []

function MainPage() {
    const [trendMovies, setTrendMovies] = useState([])
    const [trendTvs, setTrendTvs] = useState([])
    const [playlistList, setPlaylistList] = useState([])
    const [playlistMovies, setPlaylistMovies] = useState([])
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

        async function clearArray() {
            koMovieData = []
            koTVData = []
            playlists = []
            playlistMovieData = []
        }

        clearArray()
        getMovieData()
        getTVData()
    }, [])

    async function getPlaylistFromDB() {
        await fetch('http://localhost:8000/v1/playlist', { method: 'GET' })

        .then((response) => response.json())
        .then((data) => {
            playlists = []
            if(!data) {
                setPlaylistList(playlists)
                return
            }
            data.forEach(element => {
                if (element.Playlist.length != 0) {
                    const arr = element.Playlist.split(',')
                    playlists.push({id: element.Id, title: element.Name, playlist: arr, type: element.Type})
                    setPlaylistList(playlists)
                }
            })
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
                        await fetch(`https://api.themoviedb.org/3/${playlist.type}/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                            .then((response) => response.json())
                            .then((data) => {
                                elementResult.overview = data.overview
                            })
                    }
                    resultPlaylistArray.push(elementResult)
                } catch (error) {}
            }
            playlistMovieData.push({title: playlist.title, type: playlist.type, playlistData: resultPlaylistArray})
        }
        CardStore.increaseMaxCount(playlistMovieData.length)
        setPlaylistMovies(playlistMovieData)
    }

    useEffect(() => {
        if (trendTvs.length == 0) return
        getPlaylistFromDB()
    }, [trendTvs])

    useEffect(() => {
        if (playlistList.length == 0) return
        getPlaylistMovieData()
    }, [playlistList])

    return (
        <MainPageTemplate
            trendMovies={trendMovies}
            trendTvs={trendTvs}
            playlistMovies={playlistMovies}
            isImageLoaded={isImageLoaded}
            isLoaded={isLoaded}
        />
    )
}

export default MainPage
