import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ContentCardWithEvent from '../Molecules/ContentCardWithEvent';

const ContentSlideSectionDiv = styled.div `
    height: 420rem;
    background-color: var(--w-background);
    @media (min-width: 1380px) {
        & {
            width: 1380rem;
        }
    }
`;

const ContentSlideSectionTitle = styled.span `
    height: 70rem;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24rem;
    line-height: 70rem;
    margin-left: 50rem;
    color: var(--w-black);
`

const ContentSlideGrid = styled.div `
    height: 340rem;
    column-gap: 40rem;
    transition: all 0.5s;
    @media (min-width: 1380px) {
        & {
            width: 1280rem;
        }
    }
`

const SlideButton = styled.button `
    display: none;
    width: 40rem;
    height: 40rem;
    border: 0;
    margin-top: -50rem;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
`

const SlideWrapper1 = styled.div `
    &:hover > div ${SlideButton} {
        display: block;
    }
`

const SlideWrapper2 = styled.div `
    width: 1280rem;
    overflow: hidden;
    position: relative;
`

function ContentSlideSection({sectionTitle, datas, type}) {
    const [slideIndex, setSlideIndex] = useState(0);

    async function rightOnce() {
        if (slideIndex < datas.length - 6) 
            setSlideIndex(slideIndex + 1)
    };

    async function makeWideForLastIndex() {
        setSlideIndex(slideIndex + 1)
    };
    async function makeNormalForLastIndex() {
        setSlideIndex(slideIndex - 1)
    };

    return (
        <ContentSlideSectionDiv className='fc'>
            <ContentSlideSectionTitle>
                {sectionTitle}
            </ContentSlideSectionTitle>
            <SlideWrapper1 className='fr fsevenly'>
                <div className='fc fcenter'>
                    <SlideButton onClick={() => {
                        if (slideIndex > 0)
                            setSlideIndex(slideIndex - 1)
                    }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 10L15 20L25 30" stroke="#252525"/>
                        </svg>
                    </SlideButton>
                </div> 
                <SlideWrapper2>
                    <ContentSlideGrid id='contentSlideGrid' className='fr' style={{transform: `translateX(-${slideIndex * 220}px)`}}>
                    {   
                        datas.map((element, index) => {
                            let rate1 = element.vote_average || '';
                            let rate2 = Math.floor(rate1 * 10)
                            if (type == 'movie') {
                                let year1 = element.release_date || '';
                                let year2 = year1?.slice(0, 4);
                                let desc = `${year2}`
                                let country;
                                try {
                                    country = element.production_countries[0].iso_3166_1;
                                    if (country != undefined) {
                                        if (country == 'US') {
                                            desc += ` · 미국`;
                                        } else if (country == 'GB') {
                                            desc += ` · 영국`;
                                        } else if (country == 'KR') {
                                            desc += ` · 한국`;
                                        } else if (country == 'JP') {
                                            desc += ` · 일본`;
                                        } else if (country == 'AU') {
                                            desc += ` · 호주`;
                                        } else if (country == 'ES') {
                                            desc += ` · 스페인`;
                                        } else if (country == 'FR') {
                                            desc += ` · 프랑스`;
                                        } else if (country == 'NL') {
                                            desc += ` · 네덜란드`; 
                                        } else if (country == 'CN') {
                                            desc += ` · 중국`;
                                        } else if (country == 'HK') {
                                            desc += ` · 홍콩`;
                                        } else if (country == 'CA') {
                                            desc += ` · 캐나다`;
                                        } else if (country == 'DE') {
                                            desc += ` · 독일`;
                                        } else if (country == 'IN') {
                                            desc += ` · 인도`;
                                        } else if (country == 'IT') {
                                            desc += ` · 이탈리아`;
                                        } else if (country == 'MX') {
                                            desc += ` · 멕시코`;
                                        } else if (country == 'NZ') {
                                            desc += ` · 뉴질랜드`;
                                        } 
                                    }
                                } catch (error) {
                                    
                                }
                                return (
                                    <ContentCardWithEvent id={element.id} posterUrl={element.poster_path} bigImageUrl={element.bigImage} title={element.title} desc={desc} 
                                        key={`card_${element.id}`} score={`${rate2}`} slideIndex={slideIndex} index={index + 1} 
                                        rightOnce={rightOnce} makeWideForLastIndex={makeWideForLastIndex} 
                                        makeNormalForLastIndex={makeNormalForLastIndex} datasLength={datas.length} overview={element.overview}/>
                                )
                            }
                            else if (type == 'tv') {
                                let year1 = element.first_air_date || '';
                                let year2 = year1?.slice(0, 4);
                                let desc = `${year2}`
                                let country;
                                try {
                                    country = element.origin_country[0];
                                    if (country != undefined) {
                                        if (country == 'US') {
                                            desc += ` · 미국`;
                                        } else if (country == 'GB') {
                                            desc += ` · 영국`;
                                        } else if (country == 'KR') {
                                            desc += ` · 한국`;
                                        } else if (country == 'JP') {
                                            desc += ` · 일본`;
                                        } else if (country == 'AU') {
                                            desc += ` · 호주`;
                                        } else if (country == 'ES') {
                                            desc += ` · 스페인`;
                                        } else if (country == 'FR') {
                                            desc += ` · 프랑스`;
                                        } else if (country == 'NL') {
                                            desc += ` · 네덜란드`; 
                                        } else if (country == 'CN') {
                                            desc += ` · 중국`;
                                        } else if (country == 'HK') {
                                            desc += ` · 홍콩`;
                                        } else if (country == 'CA') {
                                            desc += ` · 캐나다`;
                                        } else if (country == 'DE') {
                                            desc += ` · 독일`;
                                        } else if (country == 'IN') {
                                            desc += ` · 인도`;
                                        } else if (country == 'IT') {
                                            desc += ` · 이탈리아`;
                                        } else if (country == 'MX') {
                                            desc += ` · 멕시코`;
                                        } else if (country == 'NZ') {
                                            desc += ` · 뉴질랜드`;
                                        } 
                                    }
                                } catch (error) {
                                    
                                }
                                return (
                                    <ContentCardWithEvent id={element.id} posterUrl={element.poster_path} bigImageUrl={element.bigImage} title={element.name} desc={desc} 
                                        key={`card_${element.id}`} score={`${rate2}`} slideIndex={slideIndex} index={index + 1} 
                                        rightOnce={rightOnce} makeWideForLastIndex={makeWideForLastIndex} 
                                        makeNormalForLastIndex={makeNormalForLastIndex} datasLength={datas.length} overview={element.overview}/>
                                )
                            }
                            else if (type == undefined) {
                                let year1 = element.release_date || '';
                                let year2 = year1?.slice(0, 4);
                                return (
                                    <ContentCardWithEvent id={element.id} posterUrl={element.poster_path} bigImageUrl={element.bigImage} title={element.title} desc={year2} 
                                        key={`card_${element.id}`} score={`${rate2}`} slideIndex={slideIndex} index={index + 1} 
                                        rightOnce={rightOnce} makeWideForLastIndex={makeWideForLastIndex} 
                                        makeNormalForLastIndex={makeNormalForLastIndex} datasLength={datas.length} overview={element.overview}/>
                                )
                            }
                        })
                    }
                    </ContentSlideGrid>
                </SlideWrapper2>
                <div className='fc fcenter'>
                    <SlideButton onClick={() => {
                        if (slideIndex < datas.length - 6) 
                            setSlideIndex(slideIndex + 1)
                    }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 30L25 20L15 10" stroke="#252525"/>
                        </svg>
                    </SlideButton>
                </div>
            </SlideWrapper1>
        </ContentSlideSectionDiv>
    )
}

export default ContentSlideSection
