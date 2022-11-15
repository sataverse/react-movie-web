import { useRef } from 'react'
import styled from 'styled-components'

const ModalBigImageImg = styled.img`
    position: sticky;
    top: 0;
    width: 1400rem;
    height: 800rem;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s;
`

function ModalBigImage({ imageSrc }) {
    const loadingImage = useRef(null)
    return (
        <ModalBigImageImg
            ref={loadingImage}
            src={`https://www.themoviedb.org/t/p/original/${imageSrc}`}
            onLoad={() => (loadingImage.current.style.opacity = 1)}
        />
    )
}

export default ModalBigImage
