import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { getDetailContentFromAPI, getCreditFromApi } from '../../Modules/utils'
import ModalBigImage from '../Atoms/Modal/ModalBigImage'
import ModalCloseButton from '../Atoms/Modal/ModalCloseButton'
import ModalDesc from '../Atoms/Modal/ModalDesc'
import ModalPosterImage from '../Atoms/Modal/ModalPosterImage'
import ModalScrollDownButton from '../Atoms/Modal/ModalScrollDownButton'
import ModalTitle from '../Atoms/Modal/ModalTitle'
import { findCountry } from '../../Modules/utils'
import ModalTagline from '../Atoms/Modal/ModalTagline'
import ModalStory from '../Atoms/Modal/ModalStory'
import ModalScore from '../Atoms/Modal/ModalScore'
import ModalMyScore from '../Atoms/Modal/ModalMyScore'

const ModalDetailContentBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    animation: fadeInForModal ease 0.3s forwards;

    @keyframes fadeInForModal {
        from {
            background-color: transparent;
            backdrop-filter: blur(0);
        }
        to {
            background-color: #00000040;
            backdrop-filter: blur(3rem);
        }
    }
`

const ModalDetailContentDiv = styled.div`
    position: relative;
    width: 1400rem;
    height: 800rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ModalDetailContentScrollArea = styled.div`
    position: relative;
    width: 100%;
`

const ModalCloseButtonWrapper = styled.div`
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    width: 1400rem;
    height: 40rem;
`

const ModalScrollDownButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: -60rem;
    transform: translateX(-50%);
    bottom: 60rem;
    width: 40rem;
    height: 40rem;
`

const ModalDetailContentWrapper1 = styled.div`
    position: relative;
    width: 100%;
    height: 800rem;
    background-color: white;
`

const ModalDetailContentWrapper2 = styled.div`
    position: relative;
    height: 800rem;
    width: 1000rem;
    left: 50%;
    transform: translateX(-50%);
`

const ModalDetailContentWrapper3 = styled.div`
    position: relative;
    top: 40rem;
    width: 100%;
`

const ModalDetailContentTextWrapper1 = styled.div`
    position: relative;
    width: 720rem;
`

const ModalDetailContentTextWrapper2 = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => `${props.$height}rem`};
`

const HR = styled.div`
    width: 100%;
    height: 1rem;
    background-color: var(--w-graywhite);
`

function ModalDetailContent({ id, hideModal }) {
    const { detailData, imageSrc } = getDetailContentFromAPI(id)
    //const { creditData } = getCreditFromApi(id)
    const scrollHere1 = useRef(null)
    const scrollHere2 = useRef(null)
    const modalWrapper2 = useRef(null)
    async function scrollDownModal() {
        scrollHere2.current.scrollIntoView({ behavior: 'smooth' })
    }

    function calcScore() {
        let rate1 = detailData.vote_average || ''
        let rate2 = Math.floor(rate1 * 10)
        return rate2
    }

    useEffect(() => {
        if (modalWrapper2 && modalWrapper2.current) {
            modalWrapper2.current.addEventListener('wheel', function (e) {
                e.preventDefault()
                if (e.deltaY > 0) {
                    scrollHere2.current.scrollIntoView({ behavior: 'smooth' })
                } else if (e.deltaY < 0) {
                    scrollHere1.current.scrollIntoView({ behavior: 'smooth' })
                }
            })
        }
    }, [])

    return (
        <ModalDetailContentBackground
            onClick={() => {
                hideModal()
            }}>
            <ModalCloseButtonWrapper className='fr fright'>
                <ModalCloseButton hideModal={hideModal}></ModalCloseButton>
            </ModalCloseButtonWrapper>
            <ModalDetailContentDiv
                ref={modalWrapper2}
                onClick={(event) => {
                    event.stopPropagation()
                }}>
                <ModalDetailContentScrollArea className='fc fleft'>
                    <div style={{ width: '0', height: '0' }} ref={scrollHere1} />
                    <ModalBigImage imageSrc={imageSrc} />
                    <ModalDetailContentWrapper1 className='fc fleft'>
                        <ModalScrollDownButtonWrapper>
                            <ModalScrollDownButton scrollDownModal={scrollDownModal} />
                        </ModalScrollDownButtonWrapper>
                        <ModalDetailContentWrapper2 ref={scrollHere2}>
                            <ModalDetailContentWrapper3 className='fr fsbetween'>
                                {detailData != undefined && <ModalPosterImage url={detailData.poster_path} />}
                                <ModalDetailContentTextWrapper1 className='fc fleft'>
                                    <ModalDetailContentTextWrapper2 $height='40' className='fr fsbetween'>
                                        {detailData != undefined && <ModalTitle title={detailData.title} />}
                                        {detailData != undefined && <ModalScore score={calcScore()} />}
                                    </ModalDetailContentTextWrapper2>
                                    <ModalDetailContentTextWrapper2 $height='40' className='fr fsbetween' style={{ marginBottom: '10rem' }}>
                                        {detailData != undefined && <ModalTagline tagline={detailData.tagline} />}
                                        <ModalMyScore rate={5} />
                                    </ModalDetailContentTextWrapper2>
                                    {detailData != undefined && <ModalStory story={detailData.overview} />}
                                    <HR />
                                    <div style={{ backgroundColor: 'white', height: '60rem' }}></div>
                                    <HR />
                                </ModalDetailContentTextWrapper1>
                            </ModalDetailContentWrapper3>
                        </ModalDetailContentWrapper2>
                    </ModalDetailContentWrapper1>
                </ModalDetailContentScrollArea>
            </ModalDetailContentDiv>
        </ModalDetailContentBackground>
    )
}

export default ModalDetailContent
