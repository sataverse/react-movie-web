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
        async function clearArray() {
            tempLikedListData = []
            tempRatedListData = []
        }
        clearArray()
    }, [])

    useEffect(() => {
        if (!likedList || likedList.length == 0) return
        async function getLikedListData() {
            for (const element of likedList) {
                fetch(`https://api.themoviedb.org/3/${element.Type}/${element.Id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
                    .then((response) => response.json())
                    .then((response) => {
                        response.type = element.Type
                        tempLikedListData.push(response)
                    })
            }
            setLikedListData(tempLikedListData)
        }
        getLikedListData()
    }, [likedList])

    useEffect(() => {
        if (!ratedList || ratedList.length == 0) return
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
        getRatedListData()
    }, [ratedList])

    console.log('userpage')

    return <UserPageTemplate likedListData={likedListData} ratedListData={ratedListData} />
}

export default UserPage
