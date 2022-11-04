import React, { useState, useEffect } from 'react';
import MainPageTemplate from '../Templates/MainPageTemplate';

const gbsPlaylist = ['53434', '561', '1487', '821153', '187', '705996', '22538', '361743', '241', '8327'];
let gbsPlaylistData = [];
let koMovieData = [];
let koTVData = [];

function MainPage() {
    const [trendMovies, setTrendMovies] = useState(new Array(0));
    const [trendTvs, setTrendTvs] = useState(new Array(0));
    const [gbsPick, setGbsPick] = useState(new Array(0));

    useEffect(() => {
        
        async function getMovieData() {
            let responseMovie = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=6199da9940f55ef72ddc1512ea6eca9a');
            let enMovieData = await responseMovie.json();

            for(const element of enMovieData.results) {
                let elementResult;
                let ifNoOverview = false;
                await fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                .then(response => response.json())
                .then(data => {
                    elementResult = data;
                    if (data.overview == "")
                        ifNoOverview = true;
                })
                if (ifNoOverview == true) {
                    await fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                    .then(response => response.json())
                    .then(data => elementResult.overview = data.overview)
                }
                await fetch(`https://api.themoviedb.org/3/movie/${element.id}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                .then(response => response.json())
                .then(data => {
                    elementResult.bigImage = data.backdrops[0].file_path;
                    koMovieData.push(elementResult);
                })
            }
            setTrendMovies(koMovieData)
        }
        getMovieData()

        async function getTVData() {
            let responseTV = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=6199da9940f55ef72ddc1512ea6eca9a');
            let enTVData = await responseTV.json();
            for(const element of enTVData.results) {
                let elementResult;
                let ifNoOverview = false;
                try {
                    await fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then(response => response.json())
                    .then(data => {
                        elementResult = data;
                        if (data.overview == "")
                            ifNoOverview = true;
                    })
                    if (ifNoOverview == true) {
                        await fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                        .then(response => response.json())
                        .then(data => elementResult.overview = data.overview)
                    }
                    await fetch(`https://api.themoviedb.org/3/tv/${element.id}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                    .then(response => response.json())
                    .then(data => {
                        elementResult.bigImage = data.backdrops[0].file_path;
                        koTVData.push(elementResult);
                    })
                } catch (error) { }
            }
            setTrendTvs(koTVData)
        }
        getTVData()

        async function getGBSPick(){
            for(const element of gbsPlaylist) {
                let elementResult;
                let ifNoOverview = false;
                try {
                    await fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then(response => response.json())
                    .then(data => {
                        elementResult = data;
                        if (data.overview == "")
                            ifNoOverview = true;
                    })
                    if (ifNoOverview == true) {
                        await fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                        .then(response => response.json())
                        .then(data => elementResult.overview = data.overview)
                    }
                    await fetch(`https://api.themoviedb.org/3/movie/${element}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                    .then(response => response.json())
                    .then(data => {
                        elementResult.bigImage = data.backdrops[0].file_path;
                        gbsPlaylistData.push(elementResult);
                    })
                } catch (error) { }
            }
            setGbsPick(gbsPlaylistData)
        }
        getGBSPick();
    }, [])

    return (
        <MainPageTemplate trendMovies={trendMovies} trendTvs={trendTvs} gbsPick={gbsPick}></MainPageTemplate>
    )
}

export default MainPage
