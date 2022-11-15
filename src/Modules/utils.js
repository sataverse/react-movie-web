import { useState, useEffect } from 'react'

export function findCountry(country) {
    if (country != undefined) {
        if (country == 'US') return ' · 미국'
        else if (country == 'GB') return ' · 영국'
        else if (country == 'KR') return ' · 한국'
        else if (country == 'JP') return ' · 일본'
        else if (country == 'AU') return ' · 호주'
        else if (country == 'ES') return ' · 스페인'
        else if (country == 'FR') return ' · 프랑스'
        else if (country == 'NL') return ' · 네덜란드'
        else if (country == 'CN') return ' · 중국'
        else if (country == 'HK') return ' · 홍콩'
        else if (country == 'CA') return ' · 캐나다'
        else if (country == 'DE') return ' · 독일'
        else if (country == 'IN') return ' · 인도'
        else if (country == 'IT') return ' · 이탈리아'
        else if (country == 'MX') return ' · 멕시코'
        else if (country == 'NZ') return ' · 뉴질랜드'
        else return ''
    }
}

export const getDetailContentFromAPI = (id) => {
    const [detailData, setDetailData] = useState()
    const [imageSrc, setImageSrc] = useState()
    useEffect(() => {
        async function getDetail(id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                .then((response) => response.json())
                .then(setDetailData)
        }
        async function getImage(id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=6199da9940f55ef72ddc1512ea6eca9a`)
                .then((response) => response.json())
                .then((data) => {
                    setImageSrc(data.backdrops[0].file_path)
                })
        }
        getDetail(id)
        getImage(id)
    }, [id])
    return { detailData, imageSrc }
}

export const getCreditFromApi = (id) => {
    const [creditData, setCreditData] = useState([])
    useEffect(() => {
        async function getCredit(id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                .then((response) => response.json())
                .then((data) => setCreditData(data.cast))
        }
        getCredit(id)
    }, [id])
    return { creditData }
}
