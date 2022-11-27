import styled from 'styled-components'
import SearchFromLarge from '../Molecules/SearchFormLarge'
import ContentSearchGrid from '../Organisms/ContentSearchGrid'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import { useState, useEffect } from 'react'

const SearchPageTemplateWrapper = styled.div`
    position: relative;
    width: 100vw;
    top: 25rem;
`

function SearchPageTemplate({ movieData, tvData, personData, onChange = (f) => f }) {
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

    movieData.sort(function (a, b) {
        return b.popularity - a.popularity
    })

    tvData.sort(function (a, b) {
        return b.popularity - a.popularity
    })

    personData.sort(function (a, b) {
        return b.popularity - a.popularity
    })

    return (
        <>
            <SearchPageTemplateWrapper className='fc fleft'>
                <div style={{ width: '600rem' }} className='hcenter'>
                    <SearchFromLarge onChange={onChange} className='hcenter' />
                    <ContentSearchGrid data={movieData} type='movie' showModal={showModal} noScroll={noScroll} />
                    <ContentSearchGrid data={tvData} type='tv' showModal={showModal} noScroll={noScroll} />
                    <ContentSearchGrid data={personData} type='person' showModal={showModal} noScroll={noScroll} />
                </div>
            </SearchPageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} type={modalType} /> : null}
        </>
    )
}

export default SearchPageTemplate
