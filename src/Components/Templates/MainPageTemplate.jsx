import styled from 'styled-components'
import ContentSlideSection from '../Organisms/ContentSlideSection'
import MainHeader from '../Organisms/MainHeader'
import SubHeader from '../Organisms/SubHeader'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import { useState, useEffect } from 'react'

const MainPageTemplateWrapper = styled.div`
    width: 100vw;
`

function MainPageTemplate({ trendMovies, trendTvs, gbsPick, isImageLoaded, isLoaded }) {
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
            <MainPageTemplateWrapper className='fc fleft'>
                <div className='fr fcenter'>
                    <ContentSlideSection
                        sectionTitle={'🍿 인기 영화'}
                        datas={trendMovies}
                        type='movie'
                        page={'movie'}
                        isImageLoaded={isImageLoaded}
                        isLoaded={isLoaded}
                        showModal={showModal}
                    />
                </div>
                <div className='fr fcenter'>
                    <ContentSlideSection
                        sectionTitle={'📺 인기 TV 프로그램'}
                        datas={trendTvs}
                        type='tv'
                        page={'tv'}
                        isImageLoaded={isImageLoaded}
                        isLoaded={isLoaded}
                        showModal={showModal}
                    />
                </div>
                <div className='fr fcenter'>
                    <ContentSlideSection
                        sectionTitle={'내가 최근에 본거임'}
                        datas={gbsPick}
                        type='movie'
                        page={'movie'}
                        isImageLoaded={isImageLoaded}
                        isLoaded={isLoaded}
                        showModal={showModal}
                    />
                </div>
            </MainPageTemplateWrapper>
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} /> : null}
        </>
    )
}

export default MainPageTemplate
