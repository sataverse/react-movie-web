import React, { useState, useEffect } from 'react'
import UserPageTemplate from '../Templates/UserPageTemplate'

let tempLikedListData = []
let tempRatedListData = []

function UserPage() {
    const [likedList, setLikedList] = useState(JSON.parse(localStorage.getItem('favorite_list')))
    const [ratedList, setRatedList] = useState(JSON.parse(localStorage.getItem('rating_list')))
    const [likedListData, setLikedListData] = useState(new Array(0))
    const [ratedListData, setRatedListData] = useState(new Array(0))

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

    return <UserPageTemplate likedListData={likedListData} ratedListData={ratedListData} />
}

export default UserPage
