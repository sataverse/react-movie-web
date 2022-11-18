import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import ContentGrid from '../Organisms/ContentGrid'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import DraggableSlider from '../Molecules/DraggableSlider'
import SortList from '../Molecules/SortList'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MoviePageTemplateWrapper = styled.div`
    width: 100vw;
`

let itemArray = [
    ['# 현재상영작', 1],
    ['# 개봉예정작', 2],
    ['# 최고평점작', 3],
    ['⚔️ 액션', 28],
    ['🎠 모험', 12],
    ['🌏 다큐멘터리', 99],
    ['🤣 코미디', 35],
    ['💰 범죄', 80],
    ['🌹 로맨스', 10749],
    ['👪 가족', 10751],
    ['🏰 판타지', 14],
    ['📜 역사', 36],
    ['😱 공포', 27],
    ['👽 SF', 878],
    ['📺 TV 영화', 10770],
    ['🔪 스릴러', 53],
    ['🪖 전쟁', 10752],
    ['🐎 서부', 37],
    ['📽️ 드라마', 18],
    ['✏️ 애니메이션', 16],
    ['🎸 음악', 10402],
    ['🕵️ 미스터리', 9648],
] // 모든영화 = 0

function getGenreByNum(num) {
    return itemArray.filter((element) => element[1] == num)
}

function MoviePageTemplate({ data, changeGenre, sortType, changeSort }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)
    //const [sortType, setSortType] = useState(1) // 1 = 평점순, 2 = 인기순, 3 = 최신순
    const [genreText, setGenreText] = useState('🍿 모든 영화')
    const [genreType, setGenreType] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname.replaceAll('/movie', '') == '') setGenreText('🍿 모든 영화')
        else setGenreText(getGenreByNum(location.pathname.replaceAll('/movie/genre-', ''))[0][0])
    }, [location.pathname])

    useEffect(() => {
        console.log('template-ch')
    }, [])

    const showModal = async (id) => {
        setModal(true)
        setScroll(true)
        setId(id)
        document.body.style.overflow = 'none'
    }

    const hideModal = (async) => {
        setModal(false)
        setScroll(false)
    }

    //async function changeSortType(num) {
    //    setSortType(num)
    //}

    async function changeGenreType(num) {
        navigate(`/movie/genre-${num}`)
        setGenreType(num)
        changeGenre(num)
        setGenreText(getGenreByNum(num)[0][0])
    }

    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    return (
        <>
            <MainHeader />
            <MoviePageTemplateWrapper className='fc fleft'>
                <div style={{ width: '1280rem' }} className='hcenter'>
                    <ContentSlideSectionTitle text={genreText} margin={0} />
                    <div className='fr fsbetween' style={{ marginTop: '-10rem', marginBottom: '8rem' }}>
                        <DraggableSlider itemArray={itemArray} changeGenreType={changeGenreType} />
                        {genreType > 3 ? <SortList sortType={sortType} changeSortType={changeSort} /> : null}
                    </div>
                    <ContentGrid data={data} showModal={showModal} noScroll={noScroll} />
                </div>
            </MoviePageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} /> : null}
        </>
    )
}

export default MoviePageTemplate
