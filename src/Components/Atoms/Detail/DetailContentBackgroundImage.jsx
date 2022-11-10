import styled from 'styled-components'

const DetailContentBackgroundImageImg = styled.img`
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(30%);
`

function DetailContentBackgroundImage({ src }) {
    return <DetailContentBackgroundImageImg src={src} />
}

export default DetailContentBackgroundImage
