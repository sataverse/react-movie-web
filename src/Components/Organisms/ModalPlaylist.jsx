import styled, { keyframes } from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalMainLogo from '../Atoms/Modal/ModalMainLogo'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'
import ModalInput from '../Atoms/Modal/ModalInput'
import ModalConfirm from './ModalConfirmTriple'
import ModalSignButton from '../Atoms/Modal/ModalSignButton'
import MiniSearch from '../Molecules/MiniSearch'
import MiniCard from '../Molecules/MiniCard'

let tempPlaylistMovieList = []
let responseMovieList = []

const ModalPlaylistBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const PlayList = styled.span`
    position: relative;
    font-family: 'PT Sans', sans-serif !important;
    font-style: normal;
    font-weight: 700;
    font-size: 40rem;
    text-align: center;
    color: var(--w-red);
    line-height: 160rem;
    &:hover {
        cursor: default;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 50rem;
    right: 50rem;
    text-align: center;
    font-size: 16rem;
    font-weight: 500;
    color: var(--w-red);
    border-width: 0;
    background-color: transparent;
    cursor: pointer;
`

const ModalPlaylistDiv = styled.div`
    position: relative;
    width: 800rem;
    height: 800rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    animation: ${fadeIn} 0.3s linear;
`

const ModalPlaylistSearchDiv = styled.div`
    position: relative;
    width: 400rem;
    height: 300rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10rem;
    overflow: auto;
`

const ModalPlaylistSliderDiv = styled.div`
    position: relative;
    width: 700rem;
    height: 200rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10rem;
    overflow: auto;
`

function ModalPlayList({title, playlist, newTitle, addItem, deleteItem, savePlaylist, hidePlaylistModal }) {
    let tempTitle = title
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [searchText, setSearchText] = React.useState('')
    const [searchMovies, setSearchMovies] = React.useState([])

    const showConfirmModal = () => setConfirmModal(true)
    const hideConfirmModal = () => setConfirmModal(false)
    const titleChange = e => newTitle(e.target.value)

    React.useEffect(() => {
        if(searchText == '') {
            setSearchMovies([])
            return
        }
        responseMovieList = []
        for(let i=1;i<=5;i++){
            search(i)
        }
    }, [searchText])

    async function search(index) {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko&query=${searchText}&page=${index}`)
        .then((response) => response.json())
        .then((data) => {
            if(data.results.length == 0) return
            data.results.forEach((element) => {
                responseMovieList.push({
                    id: element.id,
                    title: element.title,
                    year: element.release_date.split('-')[0],
                    vote_average: parseInt(element.vote_average*10),
                    poster_path: element.poster_path,
                })
            })
            setSearchMovies(responseMovieList)
        })
    }

    return (
        <>
            <ModalPlaylistBackground onClick={() => showConfirmModal()}>
                <ModalPlaylistDiv className='fc fleft' onClick={(event) => event.stopPropagation()}>
                    <PlayList className='fr fcenter' style={{ top: '0rem', height: '70rem' }}>PlayList</PlayList>
                    <CloseButton onClick={() => showConfirmModal()}>닫기</CloseButton>
                    <ModalInput value={tempTitle} onChange={e => titleChange(e)} type='text' placeholder='플레이리스트 이름' className='hcenter' maxLength='50' style={{ width: '400rem', top: '70rem'}}/>
                    <ModalInput onChange={e => setSearchText(e.target.value)} type='text' placeholder='영화 검색' className='hcenter' style={{width: '400rem', top: '70rem'}}/>
                    <ModalPlaylistSearchDiv style={{top: '220rem'}}>
                        {searchMovies.map((item, idx) => (
                            <div className='fr' key={idx}>
                                <MiniSearch item={item} playlist={playlist} addThis={addItem}/>
                            </div>
                        ))}
                    </ModalPlaylistSearchDiv>
                    <ModalPlaylistSliderDiv className='fr' style={{top: '190rem'}}>
                        {playlist.map((item, idx) => (
                            <MiniCard key={idx} id={item} deleteThis={deleteItem} size={'medium'}/>
                        ))}
                    </ModalPlaylistSliderDiv>
                </ModalPlaylistDiv>
            </ModalPlaylistBackground>
            {confirmModal ? <ModalConfirm msg='저장할까요?' save={savePlaylist} notsave={hidePlaylistModal} cancel={hideConfirmModal} /> : null}
        </>
    )
}

export default ModalPlayList