import AdministratorPageTemplate from '../Templates/AdministratorPageTemplate'
import { useState, useEffect } from 'react'

function AdministratorPage() {
    const [playlistData, setPlaylistData] = useState([])
    const [userData, setUserData] = useState([])
    const [manageType, setManageType] = useState(1)
    const changeManageType = num => setManageType(num)

    const fetchPlaylistData = url => {
        fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            if(!data) {
                setPlaylistData([])
                return
            }
            const temp = []
            data.forEach(element => {
                const arr = element.Playlist.split(',')
                temp.push({id: element.Id, title: element.Name, playlist: arr.map(movieId => parseInt(movieId))})
            })
            setPlaylistData(temp)
        })
    }

    const fetchUserData = url => {
        fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            if(!data) {
                setUserData([])
                return
            }
            const temp = []
            data.forEach(element => temp.push({id: element.Id, email: element.Email, nickname: element.Nickname, rank: element.Rank, signupDate: element.SignUpDate}))
            setUserData(temp)
        })
    }

    useEffect(() => {
        if(manageType == 1) {
            const url = 'http://localhost:8000/v1/playlist'
            fetchPlaylistData(url)  
        }
        else {
            const url = 'http://localhost:8000/v1/all-user'
            fetchUserData(url) 
        }
    }, [manageType])

    const addPlaylistData = (title, listString) => {
        const url = `http://localhost:8000/v1/add-playlist?name=${title}&playlist=${listString}`
        fetchPlaylistData(url)
    }

    const modifyPlaylistData = (id, title, listString) => {
        console.log(id, title, listString)
        const url = `http://localhost:8000/v1/change-playlist?id=${id}&name=${title}&playlist=${listString}`
        fetchPlaylistData(url)
    }

    const deletePlaylistData = id => {
        const url = `http://localhost:8000/v1/delete-playlist?id=${id}`
        fetchPlaylistData(url)
    }

    const updateUserData = (id, rank) => {
        const url = `http://localhost:8000/v1/update-user?id=${id}&rank=${rank}`
        fetchUserData(url)
    }

    const deleteUserData = id => {
        const url = `http://localhost:8000/v1/delete-user?id=${id}`
        fetchUserData(url)
    }

    return(
        <AdministratorPageTemplate
            playlistData={playlistData}
            deletePlaylistData={deletePlaylistData}
            modifyPlaylistData={modifyPlaylistData}
            addPlaylistData={addPlaylistData}
            userData={userData}
            updateUserData={updateUserData}
            deleteUserData={deleteUserData}
            manageType={manageType} 
            changeManageType={changeManageType} 
        />
    )
}

export default AdministratorPage