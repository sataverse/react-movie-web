import React, { useState, useEffect } from 'react'
import MainPageTemplate from '../Templates/MainPageTemplate'
import CardStore from '../../Modules/CardStore'

const gbsPlaylist = ['53434', '561', '1487', '821153', '187', '705996', '22538', '361743', '241', '8327']
let gbsPlaylistData = []
let koMovieData = []
let koTVData = []

function MainPage() {
    const [trendMovies, setTrendMovies] = useState([])
    const [trendTvs, setTrendTvs] = useState([])
    const [gbsPick, setGbsPick] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    async function isImageLoaded() {
        if (CardStore.isLoaded == true) setIsLoaded(true)
    }

    useEffect(() => {
        async function getMovieData() {
            let responseMovie = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=6199da9940f55ef72ddc1512ea6eca9a')
            let enMovieData = await responseMovie.json()

            for (const element of enMovieData.results) {
                let elementResult
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
                        .then((data) => (elementResult.overview = data.overview))
                }
                await fetch(`https://api.themoviedb.org/3/movie/${element.id}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                    .then((response) => response.json())
                    .then((data) => {
                        elementResult.bigImage = data.backdrops[0].file_path
                        koMovieData.push(elementResult)
                    })
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
                            .then((data) => (elementResult.overview = data.overview))
                    }
                    await fetch(`https://api.themoviedb.org/3/tv/${element.id}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult.bigImage = data.backdrops[0].file_path
                            koTVData.push(elementResult)
                        })
                } catch (error) {}
            }
            CardStore.increaseMaxCount(koTVData.length)
            setTrendTvs(koTVData)
        }
        async function getGBSPick() {
            for (const element of gbsPlaylist) {
                let elementResult
                let ifNoOverview = false
                try {
                    await fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult = data
                            if (data.overview == '') ifNoOverview = true
                        })
                    if (ifNoOverview == true) {
                        await fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                            .then((response) => response.json())
                            .then((data) => (elementResult.overview = data.overview))
                    }
                    await fetch(`https://api.themoviedb.org/3/movie/${element}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                        .then((response) => response.json())
                        .then((data) => {
                            elementResult.bigImage = data.backdrops[0].file_path
                            gbsPlaylistData.push(elementResult)
                        })
                } catch (error) {}
            }
            CardStore.increaseMaxCount(gbsPlaylistData.length)
            setGbsPick(gbsPlaylistData)
        }

        async function clearArray() {
            gbsPlaylistData = []
            koMovieData = []
            koTVData = []
        }

        clearArray()
        getMovieData()
        getTVData()
        getGBSPick()
    }, [])

    return <MainPageTemplate trendMovies={trendMovies} trendTvs={trendTvs} gbsPick={gbsPick} isImageLoaded={isImageLoaded} isLoaded={isLoaded} />
}

export default MainPage
