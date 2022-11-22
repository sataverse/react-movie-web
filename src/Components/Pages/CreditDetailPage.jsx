import { useState, useEffect } from 'react'
import CreditDetailPageTemplate from '../Templates/CreditDetailPageTemplate'

function CreditPage() {
    const [id, setId] = useState(0)
    const [creditData, setCreditData] = useState({})
    const [index, setIndex] = useState(0)

    async function getCredit() {
        await fetch(`https://api.themoviedb.org/3/person/56734?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
            .then((response) => response.json())
            .then(setCreditData)
    }

    useEffect(() => {
        setId(location.pathname.replaceAll('/credit/', ''))
        setCreditData([])
        getCredit(id)
    }, [])

    return <CreditDetailPageTemplate data={creditData} />
}

export default CreditPage
