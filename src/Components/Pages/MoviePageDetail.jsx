import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviePageDetailTemplate from '../Templates/MoviePageDetailTemplate'

let koMovieData = [];

function MoviePageDetail() {
    const [detailData, setDetailData] = useState(new Array(0));
    let { id } = useParams();

    useEffect(() => {
        async function getDetailData() {
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            /*
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
            CardStore.increaseMaxCount(koMovieData.length);
            */
            //setDetailData(koMovieData);
        }
        getDetailData()
    }, [])

    return (
        <MoviePageDetailTemplate/>
    )
}

export default MoviePageDetail
