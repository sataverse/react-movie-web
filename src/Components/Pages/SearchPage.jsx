import { useState, useEffect } from 'react'
import SearchPageTemplate from '../Templates/SearchPageTemplate'

let searchMovieData = []
let searchTVData = []
let searchPersonData = []
let hasMovieId = []
let hasTVId = []
let hasPersonId = []

function SearchPage() {
    const [movieData, setMovieData] = useState([])
    const [tvData, setTvData] = useState([])
    const [personData, setPersonData] = useState([])
    const [searchField, setSearchField] = useState('')

    const onChange = (val) => {
        setSearchField(val)
    }

    useEffect(() => {
        if (searchField != '') {
            async function getSearchMovieData() {
                let responseMovie = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko&query=${searchField}`
                )
                let enMovieData = await responseMovie.json()
                let cnt = 0

                for (const element of enMovieData.results) {
                    cnt++
                    let elementResult
                    let ifNoOverview = false
                    try {
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
                            })
                        let ids = hasMovieId.filter((id) => id === element.id)
                        if (ids.length == 0) {
                            elementResult.type = 'movie'
                            searchMovieData.push(elementResult)
                            hasMovieId.push(element.id)
                        }
                    } catch (error) {}
                }
                if (searchMovieData.length != 0) {
                    setMovieData(searchMovieData)
                }
            }
            async function getSearchTVData() {
                let responseMovie = await fetch(
                    `https://api.themoviedb.org/3/search/tv?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko&query=${searchField}`
                )
                let enTVData = await responseMovie.json()
                let cnt = 0

                for (const element of enTVData.results) {
                    cnt++
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
                        let ids = hasTVId.filter((id) => id === element.id)
                        if (ids.length == 0) {
                            elementResult.type = 'tv'
                            searchTVData.push(elementResult)
                            hasTVId.push(element.id)
                        }
                    } catch (error) {}
                }
                if (searchTVData.length != 0) {
                    setTvData(searchTVData)
                }
            }
            async function getSearchPersonData() {
                let responseMovie = await fetch(
                    `https://api.themoviedb.org/3/search/person?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko&query=${searchField}`
                )
                let enPersonData = await responseMovie.json()
                let cnt = 0

                for (const element of enPersonData.results) {
                    cnt++
                    let elementResult
                    let ifNoBiography = false
                    try {
                        await fetch(`https://api.themoviedb.org/3/person/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                            .then((response) => response.json())
                            .then((data) => {
                                elementResult = data
                                if (data.biography == '') ifNoBiography = true
                            })
                        if (ifNoBiography == true) {
                            await fetch(`https://api.themoviedb.org/3/person/${element.id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                                .then((response) => response.json())
                                .then((data) => (elementResult.biography = data.biography))
                        }
                        if (element.known_for_department != 'Acting') continue

                        let ids = hasPersonId.filter((id) => id === element.id)
                        if (ids.length == 0) {
                            searchPersonData.push(elementResult)
                            hasPersonId.push(element.id)
                        }
                    } catch (error) {}
                }
                if (searchPersonData.length != 0) {
                    setPersonData(searchPersonData)
                }
            }
            async function clearArray() {
                searchMovieData = []
                searchTVData = []
                searchPersonData = []
                hasMovieId = []
                hasTVId = []
                hasPersonId = []
            }

            clearArray()
            getSearchMovieData()
            getSearchTVData()
            getSearchPersonData()
        }
    }, [searchField])

    return <SearchPageTemplate movieData={movieData} tvData={tvData} personData={personData} onChange={onChange} />
}

export default SearchPage
