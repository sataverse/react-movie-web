import { useState, useEffect } from 'react'
import MoviePageTemplate from '../Templates/MoviePageTemplate'

let responseMovieData = []

function MoviePage() {
    const [movieData, setMovieData] = useState([])
    const [isFetching, setFetching] = useState(false)
    const [index, setIndex] = useState(0)
    const [hasNextPage, setNextPage] = useState(true)

    async function getMovie() {
        console.log('getMovie' + index)
        for (let i = 1; i <= 3; i++) {
            await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko&page=${index * 3 + i}`)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((element) => {
                        responseMovieData.push(element)
                    })
                })
        }
        setMovieData(responseMovieData)
        setIndex(index + 1)
        setFetching(false)
    }

    useEffect(() => {
        responseMovieData = []
        getMovie()
    }, [])

    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY > document.body.offsetHeight - 1000) {
            setFetching(true)
        }
    })

    useEffect(() => {
        if (isFetching && hasNextPage) getMovie()
        else if (!hasNextPage) setFetching(false)
    }, [isFetching])

    return <MoviePageTemplate data={movieData} />
}

export default MoviePage
