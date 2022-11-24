import { useState, useEffect } from 'react'
import CreditDetailPageTemplate from '../Templates/CreditDetailPageTemplate'
import { useLocation } from 'react-router-dom'

function CreditDetailPage() {
    const location = useLocation()
    const [id, setId] = useState(0)
    const [creditData, setCreditData] = useState({})
    const [creditMovieData, setCreditMovieData] = useState([])
    const [index, setIndex] = useState(0)

    async function getCredit(id) {
        if (id != 0) {
            let movieData = []
            await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                .then((response) => response.json())
                .then(setCreditData)
            await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                .then((response) => response.json())
                .then((data) => {
                    data.cast.forEach((element) => {
                        element.type = 'movie'
                        movieData.push(element)
                    })
                    data.crew.forEach((element) => {
                        element.type = 'movie'
                        if (movieData.filter((obj) => obj.id == element.id).length == 0) movieData.push(element)
                    })
                })
            setCreditMovieData(movieData)
        }
    }

    useEffect(() => {
        setId(location.pathname.replaceAll('/credit/', ''))
        getCredit(id)
    }, [id])

    useEffect(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        setId(location.pathname.replaceAll('/credit/', ''))
        getCredit(id)
    }, [location.pathname])

    return <CreditDetailPageTemplate data={creditData} creditMovieData={creditMovieData} />
}

export default CreditDetailPage
