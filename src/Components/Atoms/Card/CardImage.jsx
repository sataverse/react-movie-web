import { useRef, useState } from 'react'
import styled from 'styled-components'
import { getRandomColor } from '../../../Modules/utils'

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

const SkeletonDiv = styled.div`
    width: 180rem;
    height: 270rem;
    transition: all 0.3s;
    background-color: ${(props) => props.color};
    border-radius: 6rem;
`

function CardImage({ posterUrl }) {
    const loadingImage = useRef(null)
    const [imageStatus, setImageStatus] = useState(true)
    return (
        <>
            {imageStatus && (
                <CardImageImg
                    ref={loadingImage}
                    className='no-drag'
                    loading='lazy'
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterUrl}`}
                    onLoad={() => (loadingImage.current.style.opacity = 1)}
                    onError={() => {
                        setImageStatus(false)
                    }}
                />
            )}
            {!imageStatus && <SkeletonDiv color={getRandomColor()} />}
        </>
    )
}

export default CardImage
