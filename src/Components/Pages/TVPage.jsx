import { useState, useEffect } from 'react'
import TVPageTemplate from '../Templates/TVPageTemplate'

let responseTVData = []
let today = new Date()
let year = today.getFullYear()
let month = ('0' + (today.getMonth() + 1)).slice(-2)
let day = ('0' + today.getDate()).slice(-2)
let dateString = year + '-' + month + '-' + day

function TVPage() {
    const [tvData, setTVData] = useState([])
    const [isFetching, setFetching] = useState(false)
    const [index, setIndex] = useState(0)
    const [currentGenre, setCurrentGenre] = useState(0)
    const [currentSort, setCurrentSort] = useState('popularity.desc')

    const changeGenre = (genreId) => {
        responseTVData = []
        setIndex(0)
        setCurrentGenre(genreId)
    }

    const changeSort = (changedSort) => {
        if (changeSort == currentSort) return
        responseTVData = []
        setIndex(0)
        setCurrentSort(changedSort)
    }

    async function getTV({ sort, genre }) {
        let api_key = '6199da9940f55ef72ddc1512ea6eca9a'
        let url = ''
        if (genre == 0) url = `https://api.themoviedb.org/3/tv/popular?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`
        else if (genre == 1) url = `https://api.themoviedb.org/3/tv/popular?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`
        else if (genre == 2) url = `https://api.themoviedb.org/3/tv/popular?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`
        else if (genre == 3) url = `https://api.themoviedb.org/3/tv/popular?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`
        else
            url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=ko&sort_by=${sort}&with_genres=${genre}&release_date.lte=${dateString}&vote_count.gte=50`

        //sort_by - vote_average.desc, popularity.desc, release_date.desc
        //vote_count.gte - 투표수

        for (let i = 1; i <= 3; i++) {
            await fetch(`${url}&page=${index * 3 + i}`)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((element) => {
                        responseTVData.push(element)
                    })
                })
        }
        setTVData(responseTVData)
        setIndex(index + 1)
        setFetching(false)
    }

    useEffect(() => {
        responseTVData = []
        setTVData([])
        getTV({ sort: currentSort, genre: currentGenre })
    }, [currentGenre, currentSort])

    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY > document.body.offsetHeight - 1000) {
            setFetching(true)
        }
    })

    useEffect(() => {
        if (isFetching) getTV({ sort: currentSort, genre: currentGenre })
    }, [isFetching])

    return <TVPageTemplate data={tvData} changeGenre={changeGenre} sortType={currentSort} changeSort={changeSort} />
}

export default TVPage
