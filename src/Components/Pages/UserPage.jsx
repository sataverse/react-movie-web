import React, { useState, useEffect } from 'react'
import UserPageTemplate from '../Templates/UserPageTemplate'

const likedList = JSON.parse(localStorage.getItem('favorite_list'))
const ratedList = JSON.parse(localStorage.getItem('rating_list'))

/*
const likedList = [
    { id: '53434', type: 'movie' },
    { id: '561', type: 'movie' },
    { id: '1487', type: 'movie' },
    { id: '821153', type: 'movie' },
    { id: '187', type: 'movie' },
    { id: '705996', type: 'movie' },
    { id: '22538', type: 'movie' },
    { id: '361743', type: 'movie' },
    { id: '241', type: 'movie' },
    { id: '8327', type: 'movie' },
]
const ratedList = [
    { id: '545611', type: 'movie' },
    { id: '46838', type: 'movie' },
    { id: '8051', type: 'movie' },
    { id: '8068', type: 'movie' },
    { id: '755', type: 'movie' },
    { id: '424', type: 'movie' },
    { id: '11950', type: 'movie' },
    { id: '11216', type: 'movie' },
    { id: '438', type: 'movie' },
    { id: '64688', type: 'movie' },
]
*/
let tempLikedListData = []
let tempRatedListData = []

function UserPage() {
    
    const [likedListData, setLikedListData] = useState(new Array(0))
    const [ratedListData, setRatedListData] = useState(new Array(0))

    useEffect(() => {
        async function getLikedListData() {
            for (const element of likedList) {
                await fetch(`https://api.themoviedb.org/3/${element.Type}/${element.Id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((response) => {
                        response.type = element.Type
                        tempLikedListData.push(response)
                    })
            }
            setLikedListData(tempLikedListData)
        }
        async function getRatedListData() {
            for (const element of ratedList) {
                await fetch(`https://api.themoviedb.org/3/${element.Type}/${element.Id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((response) => {
                        response.type = element.Type
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
