import styled, { keyframes } from 'styled-components'
import React, { useState, useEffect } from 'react'
import Logo from '../Atoms/Svg/Logo'
import ModalInputLine from '../Atoms/Modal/ModalInputLine'
import ModalConfirm from './ModalConfirmTriple'
import MiniSearchBanner from '../Molecules/MiniSearchBanner'

let responseMovieList = []

const ModalBannerBackground = styled.div`
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

const ModalBannerDiv = styled.div`
    position: relative;
    width: 600rem;
    height: 700rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    animation: ${fadeIn} 0.3s linear;
`

const Banner = styled.span`
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

const ModalSelectRadioLeft = styled.div`
    position: absolute;
    width: 150rem;
    height: 40rem;
    line-height: 40rem;
    left: 100rem;
    top: 130rem;
    border-radius: 10rem;
    background-color: ${(props) => {
        if(props.$selected) return '#fda7a7'
        else return 'transparent'
    }};
    font-size: 16rem;
    text-align: center;

    &:hover{
        cursor: pointer;
    }
`

const ModalSelectRadioRight = styled.div`
    position: absolute;
    width: 150rem;
    height: 40rem;
    line-height: 40rem;
    right: 100rem;
    top: 130rem;
    border-radius: 10rem;
    background-color: ${(props) => {
        if(props.$selected) return '#fda7a7'
        else return 'transparent'
    }};
    font-size: 16rem;
    text-align: center;

    &:hover{
        cursor: pointer;
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

const ModalBannerSearchDiv = styled.div`
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

function ModalPlayList({title, type, comment, newMovieId, newTitle, newType, newComment, saveBanner, hideBannerModal}) {
    let tempComment = comment

    const [confirmModal, setConfirmModal] = React.useState(false)
    const [searchText, setSearchText] = React.useState('')
    const [searchMovies, setSearchMovies] = React.useState([])

    const showConfirmModal = () => setConfirmModal(true)
    const hideConfirmModal = () => setConfirmModal(false)

    const searchEnter = e => {
        if(e.keyCode == 13) setSearchText(e.target.value)
    }

    const setItem = (id, title) => {
        newMovieId(id)
        newTitle(title)
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
            <ModalBannerBackground onClick={() => showConfirmModal()}>
                <ModalBannerDiv className='fc fleft' onClick={(event) => event.stopPropagation()}>
                    <Banner className='fr fcenter' style={{ top: '20rem', height: '60rem' }}><Logo width={150} height={60} /></Banner>
                    <CloseButton onClick={() => showConfirmModal()}>닫기</CloseButton>
                    <ModalSelectRadioLeft $selected={type=='movie'} onClick={() => newType('movie')}>영화</ModalSelectRadioLeft>
                    <ModalSelectRadioRight $selected={type=='tv'} onClick={() => newType('tv')}>TV프로그램</ModalSelectRadioRight>
                    <ModalInputLine value={tempComment} onChange={e => newComment(e.target.value)} type='text' placeholder='문구를 남겨보세요' className='hcenter' maxLength='100' style={{width: '400rem', top: '130rem'}}/>
                    <ModalInputLine value={title} type='text' placeholder='제목' className='hcenter not-selected' maxLength='100' style={{ width: '400rem', top: '130rem'}} readOnly />
                    <ModalInputLine onKeyDown={e => searchEnter(e)} type='text' placeholder='영화나 TV프로그램을 검색해보세요' className='hcenter' style={{width: '400rem', top: '130rem'}}/>
                    <ModalBannerSearchDiv style={{top: '280rem'}}>
                        {searchMovies.map((item, idx) => (
                            <div className='fr' key={idx}>
                                <MiniSearchBanner item={item} setThis={setItem}/>
                            </div>
                        ))}
                    </ModalBannerSearchDiv>
                </ModalBannerDiv>
            </ModalBannerBackground>
            {confirmModal ? <ModalConfirm msg='저장할까요?' save={saveBanner} notsave={hideBannerModal} cancel={hideConfirmModal} /> : null}
        </>
    )
}

export default ModalPlayList