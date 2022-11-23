import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import SubHeader from '../Organisms/SubHeader'
import SearchFromLarge from '../Molecules/SearchFormLarge'
import ContentSearchGrid from '../Organisms/ContentSearchGrid'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import { useState, useEffect } from 'react'

const SearchPageTemplateWrapper = styled.div`
    position: relative;
    width: 100vw;
    top: 25rem;
    left: 660rem;
    transform: translateX(-15%);
    `

function SearchPageTemplate({ movieData, tvData, personData, onChange = f => f}) {
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

    movieData.sort(function(a, b) {
        return b.popularity - a.popularity
    })

    tvData.sort(function(a, b) {
        return b.popularity - a.popularity
    })

    personData.sort(function(a, b) {
        return b.popularity - a.popularity
    })

    return (
        <>
            <MainHeader />
            <SearchPageTemplateWrapper className='fc fleft'>
                <SearchFromLarge onChange={onChange}/>
                <ContentSearchGrid 
                    data={movieData}
                    type='movie'
                    showModal={showModal} 
                    noScroll={noScroll} 
                />
                <ContentSearchGrid 
                    data={tvData} 
                    type='tv'
                    showModal={showModal} 
                    noScroll={noScroll} 
                />
                <ContentSearchGrid 
                    data={personData} 
                    type='person'
                    showModal={showModal} 
                    noScroll={noScroll} 
                />
            </SearchPageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} /> : null}
        </>
    )
}

export default SearchPageTemplate