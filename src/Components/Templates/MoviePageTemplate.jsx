import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import SubHeader from '../Organisms/SubHeader'
import ContentGrid from '../Organisms/ContentGrid'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import DraggableSlider from '../Molecules/DraggableSlider'
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
]

function MoviePageTemplate({ data, changeGenre, changeSort }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)

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

    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    return (
        <>
            <SubHeader />
            <MainHeader />
            <MoviePageTemplateWrapper className='fc fleft'>
                <div style={{ width: '1280rem' }} className='hcenter'>
                    <ContentSlideSectionTitle text={'🍿 모든 영화'} margin={0} />
                    <div className='fr fsbetween' style={{ marginTop: '-10rem', marginBottom: '5rem' }}>
                        <DraggableSlider itemArray={itemArray} />
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
