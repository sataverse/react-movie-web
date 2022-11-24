import React, { useState } from 'react'
import styled from 'styled-components'
import { findCountry } from '../../Modules/utils'
import ContentCardWithEvent from '../Molecules/ContentCardWithEvent'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ContentSlideSectionLink from '../Atoms/ContentSlideSectionLink'
import SkeletonContentSlide from './SkeletonContentSlide'

const ContentSlideSectionDiv = styled.div`
    height: 420rem;
    background-color: var(--w-background);
    @media (min-width: 1380px) {
        & {
            width: 1380rem;
        }
    }
`

const ContentSlideGrid = styled.div`
    position: absolute;
    top: 0rem;
    height: 340rem;
    column-gap: 40rem;
    transition: all 0.5s;
    @media (min-width: 1380px) {
        & {
            width: 1280rem;
        }
    }
`

const SlideButton = styled.button`
    display: none;
    width: 40rem;
    height: 40rem;
    border: 0;
    margin-top: -50rem;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
`

const ContentSlideSectionLinkWrapper = styled.div``

const SlideWrapper1 = styled.div`
    height: 340rem;
    &:hover > div ${SlideButton} {
        display: block;
    }
`

const SlideWrapper2 = styled.div`
    width: 1280rem;
    overflow: hidden;
    position: relative;
`

function ContentSlideSection({ sectionTitle, datas, type, page, isImageLoaded, isLoaded, showModal }) {
    const [slideIndex, setSlideIndex] = useState(0)
    const [LinkDisplay, setLinkDisplay] = useState('none')

    async function rightOnce() {
        if (slideIndex < datas.length - 6) setSlideIndex(slideIndex + 1)
    }

    async function makeWideForLastIndex() {
        setSlideIndex(slideIndex + 1)
    }

    async function makeNormalForLastIndex() {
        setSlideIndex(slideIndex - 1)
    }

    return (
        <ContentSlideSectionDiv
            className='fc'
            onMouseOver={() => {
                setLinkDisplay('block')
            }}
            onMouseLeave={() => {
                setLinkDisplay('none')
            }}>
            <div className='fr fsbetween'>
                <ContentSlideSectionTitle text={sectionTitle} />
                <ContentSlideSectionLinkWrapper style={{ display: LinkDisplay }}>
                    {page == 'none' ? null : <ContentSlideSectionLink page={page} />}
                </ContentSlideSectionLinkWrapper>
            </div>
            <SlideWrapper1 className='fr fsevenly'>
                <div className='fc fcenter'>
                    <SlideButton
                        disabled={!isLoaded}
                        onClick={() => {
                            if (slideIndex > 0) setSlideIndex(slideIndex - 1)
                        }}>
                        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M25 10L15 20L25 30' stroke='#696969' />
                        </svg>
                    </SlideButton>
                </div>
                <SlideWrapper2>
                    <ContentSlideGrid id='contentSlideGrid' className='fr' style={{ transform: `translateX(-${slideIndex * 220}px)` }}>
                        {!isLoaded ? <SkeletonContentSlide /> : null}
                        {datas.map((element, index) => {
                            let rate1 = element.vote_average || ''
                            let rate2 = Math.floor(rate1 * 10)
                            if (type == 'movie') {
                                let year1 = element.release_date || ''
                                let year2 = year1?.slice(0, 4)
                                let desc = `${year2}`
                                try {
                                    desc += ` · ${findCountry(element.production_countries[0].iso_3166_1)}`
                                } catch (error) {}
                                return (
                                    <ContentCardWithEvent
                                        id={element.id}
                                        posterUrl={element.poster_path}
                                        backdropUrl={element.backdrop_path}
                                        title={element.title}
                                        desc={desc}
                                        score={`${rate2}`}
                                        slideIndex={slideIndex}
                                        index={index + 1}
                                        rightOnce={rightOnce}
                                        makeWideForLastIndex={makeWideForLastIndex}
                                        makeNormalForLastIndex={makeNormalForLastIndex}
                                        datasLength={datas.length}
                                        overview={element.overview}
                                        type={type}
                                        key={`main-content=${element.id}`}
                                        isImageLoaded={isImageLoaded}
                                        showModal={showModal}
                                    />
                                )
                            } else if (type == 'tv') {
                                let year1 = element.first_air_date || ''
                                let year2 = year1?.slice(0, 4)
                                let desc = `${year2}`
                                try {
                                    desc += ` · ${findCountry(element.origin_country[0])}`
                                } catch (error) {}
                                return (
                                    <ContentCardWithEvent
                                        id={element.id}
                                        posterUrl={element.poster_path}
                                        backdropUrl={element.backdrop_path}
                                        title={element.name}
                                        desc={desc}
                                        score={`${rate2}`}
                                        slideIndex={slideIndex}
                                        index={index + 1}
                                        rightOnce={rightOnce}
                                        makeWideForLastIndex={makeWideForLastIndex}
                                        type={type}
                                        makeNormalForLastIndex={makeNormalForLastIndex}
                                        datasLength={datas.length}
                                        overview={element.overview}
                                        key={`main-content=${element.id}`}
                                        isImageLoaded={isImageLoaded}
                                        showModal={showModal}
                                    />
                                )
                            } else if (type == undefined) {
                                let year1 = element.release_date || ''
                                let year2 = year1?.slice(0, 4)
                                return (
                                    <ContentCardWithEvent
                                        id={element.id}
                                        posterUrl={element.poster_path}
                                        backdropUrl={element.backdrop_path}
                                        title={element.title}
                                        desc={year2}
                                        score={`${rate2}`}
                                        slideIndex={slideIndex}
                                        index={index + 1}
                                        rightOnce={rightOnce}
                                        makeWideForLastIndex={makeWideForLastIndex}
                                        makeNormalForLastIndex={makeNormalForLastIndex}
                                        datasLength={datas.length}
                                        overview={element.overview}
                                        key={`main-content=${element.id}`}
                                        isImageLoaded={isImageLoaded}
                                        showModal={showModal}
                                    />
                                )
                            }
                        })}
                    </ContentSlideGrid>
                </SlideWrapper2>
                <div className='fc fcenter'>
                    <SlideButton
                        disabled={!isLoaded}
                        onClick={() => {
                            if (slideIndex < datas.length - 6) setSlideIndex(slideIndex + 1)
                        }}>
                        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M15 30L25 20L15 10' stroke='#696969' />
                        </svg>
                    </SlideButton>
                </div>
            </SlideWrapper1>
        </ContentSlideSectionDiv>
    )
}

export default ContentSlideSection
