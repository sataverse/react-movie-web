import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import SubHeader from '../Organisms/SubHeader'
import ContentGrid from '../Organisms/ContentGrid'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import { useState, useEffect } from 'react'

const MoviePageTemplateWrapper = styled.div`
    position: relative;
    width: 1280rem;
    left: 50%;
    transform: translateX(-50%);
`

function MoviePageTemplate({ data, genre, changeGenre }) {
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
                <ContentSlideSectionTitle text={'🍿 모든 영화'} margin={0} />
                <ContentGrid data={data} showModal={showModal} noScroll={noScroll} />
            </MoviePageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} /> : null}
        </>
    )
}

export default MoviePageTemplate
