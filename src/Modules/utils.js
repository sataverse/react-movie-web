import { useState, useEffect } from 'react'

export function findCountry(country) {
    if (country != undefined) {
        if (country == 'US') return '미국'
        else if (country == 'GB') return '영국'
        else if (country == 'KR') return '한국'
        else if (country == 'JP') return '일본'
        else if (country == 'AU') return '호주'
        else if (country == 'ES') return '스페인'
        else if (country == 'FR') return '프랑스'
        else if (country == 'NL') return '네덜란드'
        else if (country == 'CN') return '중국'
        else if (country == 'HK') return '홍콩'
        else if (country == 'CA') return '캐나다'
        else if (country == 'DE') return '독일'
        else if (country == 'IN') return '인도'
        else if (country == 'IT') return '이탈리아'
        else if (country == 'MX') return '멕시코'
        else if (country == 'NZ') return '뉴질랜드'
        else if (country == 'CZ') return '체코'
        else return '기타'
    } else return ''
}

export const getDetailContentFromAPI = (id, type) => {
    const [detailData, setDetailData] = useState()
    useEffect(() => {
        async function getDetailKo() {
            let responseData
            let noTagline = false
            let noOverview = false
            await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                .then((response) => response.json())
                .then((data) => {
                    responseData = data
                    if (data.tagline == '') noTagline = true
                    if (data.overview == '') noOverview = true
                })
            if (noTagline == true) {
                await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                    .then((response) => response.json())
                    .then((data) => {
                        responseData.tagline = data.tagline
                    })
            }
            if (noOverview == true) {
                await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=en-US`)
                    .then((response) => response.json())
                    .then((data) => {
                        responseData.overview = data.overview
                    })
            }
            setDetailData(responseData)
        }
        getDetailKo()
    }, [id])
    return { detailData }
}

export const getCreditFromApi = (id, type) => {
    const [creditData, setCreditData] = useState([])
    useEffect(() => {
        async function getCredit(id) {
            fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                .then((response) => response.json())
                .then((data) => setCreditData(data.cast))
        }
        getCredit(id)
    }, [id])
    return { creditData }
}
