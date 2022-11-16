import React, { useState, useEffect } from 'react'
import UserPageTemplate from '../Templates/UserPageTemplate'

const likedList = ['53434', '561', '1487', '821153', '187', '705996', '22538', '361743', '241', '8327']
const ratedList = ['545611', '46838', '8051', '8068', '755', '424', '11950', '11216', '438', '64688']
let tempLikedListData = []
let tempRatedListData = []

function UserPage() {
    const [likedListData, setLikedListData] = useState(new Array(0))
    const [ratedListData, setRatedListData] = useState(new Array(0))

    useEffect(() => {
        async function getLikedListData() {
            for (const element of likedList) {
                await fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((response) => {
                        tempLikedListData.push(response)
                    })
            }
            setLikedListData(tempLikedListData)
        }
        async function getRatedListData() {
            for (const element of ratedList) {
                await fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((response) => {
                        tempRatedListData.push(response)
                    })
            }
            setRatedListData(tempRatedListData)
        }
        async function clearArray() {
            tempLikedListData = []
            tempRatedListData = []
        }

        clearArray()
        getLikedListData()
        getRatedListData()
    }, [])

    return <UserPageTemplate likedListData={likedListData} ratedListData={ratedListData} />
}

export default UserPage
