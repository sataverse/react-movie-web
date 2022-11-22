import { useState, useEffect } from 'react'
import CreditPageTemplate from '../Templates/CreditPageTemplate'

let responseCreditData = []

function CreditPage() {
    const [creditData, setCreditData] = useState([])
    const [isFetching, setFetching] = useState(false)
    const [index, setIndex] = useState(0)

    async function getCredit() {
        let url = `https://api.themoviedb.org/3/person/popular?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`

        for (let i = 1; i <= 3; i++) {
            await fetch(`${url}&page=${index * 3 + i}`)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((element) => {
                        element.type = 'credit'
                        responseCreditData.push(element)
                    })
                })
        }
        setCreditData(responseCreditData)
        setIndex(index + 1)
        setFetching(false)
    }

    useEffect(() => {
        responseCreditData = []
        setCreditData([])
        getCredit()
    }, [])

    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY > document.body.offsetHeight - 1000) {
            setFetching(true)
        }
    })

    useEffect(() => {
        if (isFetching) getCredit()
    }, [isFetching])

    return <CreditPageTemplate data={creditData} />
}

export default CreditPage
