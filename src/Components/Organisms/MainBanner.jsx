import { useRef, useState } from 'react'
import styled from 'styled-components'

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
    background-color: #ffffff;
    border-radius: 6rem;
    filter: ${(props) => (props.test == true ? 'brightness(100%)' : 'brightness(40%)')};
    background-size: cover;
    background-color: #000000;
    opacity: 0;
    transition: all 0.3s;
`

const BlankBannerItem = styled.div`
    width: 800rem;
    height: 550rem;
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

function MainBanner({ bannerData }) {
    const [slideIndex, setSlideIndex] = useState(1)
    const loadingImage = useRef(null)
    return (
        <BannerWrapper className='hcenter'>
            <BannerSlider className='fr' style={{ transform: `translateX(-${slideIndex * 840 + 280}rem)` }}>
                <BlankBannerItem />
                {bannerData.length != 0 &&
                    bannerData.map((element, index) => {
                        return (
                            <BannerItem
                                ref={loadingImage}
                                className='no-drag vcenter'
                                key={`banner-${index}`}
                                test={index == slideIndex}
                                style={{
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 69.79%, rgba(0, 0, 0, 0.7) 83.33%, rgba(0, 0, 0, 0.9) 100%), url(https://www.themoviedb.org/t/p/original${element.backdrop_path})`,
                                }}
                                onLoad={() => (loadingImage.current.style.opacity = 1)}
                                onClick={() => {
                                    if (index > slideIndex) {
                                        if (slideIndex < bannerData.length - 1) {
                                            setSlideIndex(slideIndex + 1)
                                        }
                                    } else if (index < slideIndex) {
                                        if (slideIndex > 0) {
                                            setSlideIndex(slideIndex - 1)
                                        }
                                    }
                                }}>
                                <BannerComment>"{element.comment}"</BannerComment>
                            </BannerItem>
                        )
                    })}
                <BlankBannerItem />
            </BannerSlider>
        </BannerWrapper>
    )
}

export default MainBanner
