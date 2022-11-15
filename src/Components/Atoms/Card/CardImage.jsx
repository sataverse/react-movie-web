import { useRef } from 'react'
import styled from 'styled-components'

const CardImageImg = styled.img`
    width: 180rem;
    height: 270rem;
    transition: all 0.3s;
    border-radius: 6rem;
    opacity: 0;
    &:hover {
        transform: scale(1.05);
    }
`

function CardImage({ posterUrl }) {
    const loadingImage = useRef(null)
    return (
        <CardImageImg
            ref={loadingImage}
            className='no-drag'
            loading='lazy'
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterUrl}`}
            onLoad={() => (loadingImage.current.style.opacity = 1)}
        />
    )
}

export default CardImage
