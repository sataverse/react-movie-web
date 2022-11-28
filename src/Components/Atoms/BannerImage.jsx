import { useRef } from 'react'
import styled from 'styled-components'

const BannerImageImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 800rem;
    height: 500rem;
    object-fit: cover;
    opacity: 0;
    transition: all 0.3s;
`

function BannerImage({ url }) {
    const loadingImage = useRef(null)
    return (
        <BannerImageImg
            src={`https://www.themoviedb.org/t/p/original${url}`}
            ref={loadingImage}
            onLoad={() => (loadingImage.current.style.opacity = 1)}
        />
    )
}

export default BannerImage
