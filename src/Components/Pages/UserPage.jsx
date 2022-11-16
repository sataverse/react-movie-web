import React, { useState, useEffect } from 'react'
import UserPageTemplate from '../Templates/UserPageTemplate'

const likedList = ['53434', '561', '1487', '821153', '187', '705996', '22538', '361743', '241', '8327']
let tempLikedListData = []

function UserPage() {
    const [likedListData, setLikedListData] = useState(new Array(0))

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
        async function clearArray() {
            tempLikedListData = []
        }

        clearArray()
        getLikedListData()
    }, [])

    return <UserPageTemplate likedListData={likedListData} />
}

export default UserPage
