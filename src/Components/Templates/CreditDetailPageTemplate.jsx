import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ContentGrid from '../Organisms/ContentGrid'
import MainHeader from '../Organisms/MainHeader'
import ModalDetailContent from '../Organisms/ModalDetailContent'

const CreditDetailPageTemplateWrapper = styled.div`
    width: 100vw;
`

const CreditImage = styled.img`
    width: 200rem;
    height: 300rem;
    object-fit: cover;
    border-radius: 6rem;
    margin-bottom: 20rem;
`

const CreditSectionTitle = styled.span`
    font-size: 20rem;
    font-weight: 600;
    margin-bottom: 10rem;
`

const CreditBiography = styled.span`
    position: relative;
    width: 100%;
    height: fit-content;
    font-size: 14rem;
    line-height: 24rem;
    margin-bottom: 20rem;
`

function CreditDetailPageTemplate({ data, creditMovieData }) {
    const [noScroll, setScroll] = useState(false)
    const [modal, setModal] = useState(false)
    const [id, setId] = useState(null)
    const loadingImage = useRef(null)

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
            <MainHeader />
            {data.length != 0 && creditMovieData.length != 0 && (
                <CreditDetailPageTemplateWrapper>
                    <div style={{ width: '1280rem' }} className='hcenter'>
                        <ContentSlideSectionTitle text={data.name} margin={0} />
                        <div className='fr fsbetween'>
                            <div style={{ width: '260rem' }}>
                                <CreditImage
                                    ref={loadingImage}
                                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.profile_path}`}
                                    onError={() => {
                                        let random = Math.floor(Math.random() * 5) + 1
                                        loadingImage.current.src = `/skeleton/no_profile.png`
                                    }}
                                />
                            </div>
                            <div style={{ width: '1020rem' }} className='fc'>
                                <CreditSectionTitle>약력</CreditSectionTitle>
                                <CreditBiography>{data.biography}</CreditBiography>
                            </div>
                        </div>
                        <CreditSectionTitle>출연작</CreditSectionTitle>
                        <div style={{ height: '20rem' }} />
                        <ContentGrid data={creditMovieData} showModal={showModal} />
                    </div>
                </CreditDetailPageTemplateWrapper>
            )}
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} type={'movie'} /> : null}
        </>
    )
}

export default CreditDetailPageTemplate
