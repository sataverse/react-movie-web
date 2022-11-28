import styled from 'styled-components'
import ContentSlideSection from '../Organisms/ContentSlideSection'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import Footer from '../Organisms/Footer'
import { useState, useEffect } from 'react'
import MainBanner from '../Organisms/MainBanner'

const MainPageTemplateWrapper = styled.div`
    width: 100vw;
`

function MainPageTemplate({ trendMovies, trendTvs, playlistMovies, playlistList, isImageLoaded, isLoaded, loginStatus, bannerData }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)
    const [modalType, setModalType] = useState(null)

    const showModal = async (id, type) => {
        setModal(true)
        setScroll(true)
        setId(id)
        setModalType(type)
        document.body.style.overflow = 'none'
    }

    const hideModal = (async) => {
        setModal(false)
        setScroll(false)
        setModalType(null)
    }

    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    return (
        <>
            <MainBanner bannerData={bannerData} />
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
                        loginStatus={loginStatus}
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
                        loginStatus={loginStatus}
                    />
                </div>
                {playlistMovies.map((playlist, index) => (
                    <div className='fr fcenter' key={`playlist-${index}`}>
                        <ContentSlideSection
                            sectionTitle={playlist.title}
                            datas={playlist.playlistData}
                            list={playlistList[index]}
                            type={playlist.type}
                            page={'playlist'}
                            isImageLoaded={isImageLoaded}
                            isLoaded={isLoaded}
                            showModal={showModal}
                            index={index}
                            loginStatus={loginStatus}
                        />
                    </div>
                ))}
            </MainPageTemplateWrapper>
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} type={modalType} /> : null}

            <Footer />
        </>
    )
}

export default MainPageTemplate
