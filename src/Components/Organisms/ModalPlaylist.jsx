import styled, { keyframes } from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalInput from '../Atoms/Modal/ModalInput'
import ModalInputLine from '../Atoms/Modal/ModalInputLine'
import ModalConfirm from './ModalConfirmTriple'
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

const ModalPlaylistDiv = styled.div`
    position: relative;
    width: 600rem;
    height: 800rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    animation: ${fadeIn} 0.3s linear;
`

const PlayList = styled.span`
    position: relative;
    font-family: 'PT Sans', sans-serif !important;
    font-style: normal;
    font-weight: 700;
    font-size: 40rem;
    text-align: center;
    color: var(--w-red);
    line-height: 120rem;
    &:hover {
        cursor: default;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 35rem;
    right: 35rem;
    text-align: center;
    font-size: 16rem;
    font-weight: 500;
    color: var(--w-red);
    border-width: 0;
    background-color: transparent;
    cursor: pointer;
`

const ModalPlaylistSearchDiv = styled.div`
    position: relative;
    width: 411rem;
    height: 300rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    border-bottom: 1rem solid var(--w-graywhite);
    overflow: auto;
`

const ModalPlaylistSliderDiv = styled.div`
    position: relative;
    width: 550rem;
    height: 220rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10rem;
    overflow: auto;

    ::-webkit-scrollbar {
        height: 10px;
    }
`

function ModalPlayList({title, playlist, type, newTitle, addItem, deleteItem, savePlaylist, hidePlaylistModal}) {
    let tempTitle = title
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [searchText, setSearchText] = React.useState('')
    const [searchMovies, setSearchMovies] = React.useState([])

    const showConfirmModal = () => setConfirmModal(true)
    const hideConfirmModal = () => setConfirmModal(false)
    const titleChange = e => newTitle(e.target.value)
    const searchEnter = e => {
        if(e.keyCode == 13) setSearchText(e.target.value)
    }

    useEffect(() => {
        responseMovieList = []
        if(searchText == '') {
            setSearchMovies([])
            return
        }
        search()
    }, [searchText])

    async function search() {
        for(let i=1;i<5;i++) {
            await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko&query=${searchText}&page=${i}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.results.length == 0) return
                data.results.forEach((element) => {
                    if (element.poster_path) {
                        if(type == 'movie'){
                            responseMovieList.push({
                                id: element.id,
                                title: element.title,
                                popularity: element.popularity,
                                vote_average: parseInt(element.vote_average*10),
                                poster_path: element.poster_path,
                            })
                        } else {
                            responseMovieList.push({
                                id: element.id,
                                title: element.name,
                                popularity: element.popularity,
                                vote_average: parseInt(element.vote_average*10),
                                poster_path: element.poster_path,
                            })
                        }
                    }
                })
            })
        }
        responseMovieList.sort((a, b) => a.popularity < b.popularity ? 1 : -1)
        setSearchMovies(responseMovieList)
    }

    return (
        <>
            <ModalPlaylistBackground onClick={() => showConfirmModal()}>
                <ModalPlaylistDiv className='fc fleft' onClick={(event) => event.stopPropagation()}>
                    <PlayList className='fr fcenter' style={{ top: '0rem', height: '70rem' }}>PlayList</PlayList>
                    <CloseButton onClick={() => showConfirmModal()}>닫기</CloseButton>
                    <ModalInputLine value={tempTitle} onChange={e => titleChange(e)} type='text' placeholder='플레이리스트 이름을 지어주세요' className='hcenter' maxLength='50' style={{ width: '400rem', top: '50rem'}}/>
                    <ModalInputLine onKeyDown={e => searchEnter(e)} type='text' placeholder='영화나 TV프로그램을 검색해보세요' className='hcenter' style={{width: '400rem', top: '50rem'}}/>
                    <ModalPlaylistSearchDiv style={{top: '200rem'}}>
                        {searchMovies.map((item, idx) => (
                            <div className='fr' key={idx}>
                                <MiniSearch item={item} playlist={playlist} addThis={addItem}/>
                            </div>
                        ))}
                    </ModalPlaylistSearchDiv>
                    <ModalPlaylistSliderDiv className='fr' style={{top: '170rem'}}>
                        {playlist.map((item, idx) => (
                            <MiniCard key={idx} id={item} type={type} deleteThis={deleteItem} size={'medium'}/>
                        ))}
                    </ModalPlaylistSliderDiv>
                </ModalPlaylistDiv>
            </ModalPlaylistBackground>
            {confirmModal ? <ModalConfirm msg='저장할까요?' save={savePlaylist} notsave={hidePlaylistModal} cancel={hideConfirmModal} /> : null}
        </>
    )
}

export default ModalPlayList