import styled from 'styled-components'

const ModalPosterImageImg = styled.img`
    position: relative;
    width: 240rem;
    height: 360rem;
    border-radius: 6rem;
`

function ModalPosterImage({ url }) {
    return <ModalPosterImageImg src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${url}`} />
}

export default ModalPosterImage
