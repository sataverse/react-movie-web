import React, { useState, useEffect } from 'react'
import UserStore from '../../Modules/UserStore'
import UserPageTemplate from '../Templates/UserPageTemplate'

let tempLikedListData = []
let tempRatedListData = []

function UserPage() {
    const [likedList, setLikedList] = useState(UserStore.getFavorites())
    const [ratedList, setRatedList] = useState(UserStore.getStars())
    const [likedListData, setLikedListData] = useState([])
    const [ratedListData, setRatedListData] = useState([])

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
