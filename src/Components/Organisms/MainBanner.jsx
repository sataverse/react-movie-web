import { useRef, useState } from 'react'
import styled from 'styled-components'
import BannerImage from '../Atoms/BannerImage'

const BannerWrapper = styled.div`
    width: 100vw;
    height: 550rem;
    overflow-x: scroll;
    overflow-y: hidden;
    background-color: #000000;
    &::-webkit-scrollbar {
        display: none;
    }
    margin-top: 20rem;
`
const BannerSlider = styled.div`
    width: max-content;
    height: 100%;
    gap: 40rem;
    transition: all 0.5s;
`

const BannerItem = styled.div`
    width: 800rem;
    height: 500rem;
    border-radius: 6rem;
    cursor: pointer;
    filter: ${(props) => (props.indexBool == true ? 'brightness(100%)' : 'brightness(40%)')};
`

const BlankBannerItem = styled.div`
    width: 800rem;
    height: 500rem;
    background-color: #000000;
`

const BannerComment = styled.span`
    position: absolute;
    left: 0;
    bottom: 20rem;
    text-align: center;
    width: 800rem;
    font-weight: 400;
    font-size: 20rem;
    color: var(--w-graywhite);
`

const BannerCommentWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 0.9) 100%);
`

function MainBanner({ bannerData, showModal }) {
    const [slideIndex, setSlideIndex] = useState(1)
    return (
        <BannerWrapper className='hcenter'>
            <BannerSlider className='fr' style={{ transform: `translateX(-${slideIndex * 840 + 280}rem)` }}>
                <BlankBannerItem />
                {bannerData.length != 0 &&
                    bannerData.map((element, index) => {
                        return (
                            <BannerItem
                                className='no-drag vcenter'
                                key={`banner-${index}`}
                                indexBool={index == slideIndex}
                                onClick={() => {
                                    if (index > slideIndex) {
                                        if (slideIndex < bannerData.length - 1) {
                                            setSlideIndex(slideIndex + 1)
                                        }
                                    } else if (index < slideIndex) {
                                        if (slideIndex > 0) {
                                            setSlideIndex(slideIndex - 1)
                                        }
                                    } else {
                                        showModal(element.id, element.type)
                                    }
                                }}>
                                <BannerImage url={element.backdrop_path} />
                                <BannerCommentWrapper>
                                    <BannerComment>"{element.comment}"</BannerComment>
                                </BannerCommentWrapper>
                            </BannerItem>
                        )
                    })}
                <BlankBannerItem />
            </BannerSlider>
        </BannerWrapper>
    )
}

export default MainBanner
