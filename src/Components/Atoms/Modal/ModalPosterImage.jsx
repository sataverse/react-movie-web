import { useRef } from 'react'
import styled from 'styled-components'

const ModalPosterImageImg = styled.img`
    position: relative;
    width: 240rem;
    height: 360rem;
    border-radius: 6rem;
`

function ModalPosterImage({ url }) {
    const loadingImage = useRef(null)
    return (
        <ModalPosterImageImg
            ref={loadingImage}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${url}`}
            onError={() => {
                let random = Math.floor(Math.random() * 5) + 1
                loadingImage.current.src = `/skeleton/no_image_${random}.png`
            }}
        />
    )
}

export default ModalPosterImage
