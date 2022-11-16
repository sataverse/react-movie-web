import styled from 'styled-components'

const CardIndexDiv = styled.div`
    position: absolute;
    top: 6rem;
    left: 6rem;
    width: 20rem;
    height: 20rem;
    border-radius: 6rem;
    background-color: #00000040;
    z-index: 1000;
`

const CardIndexSpan = styled.div`
    position: relative;
    top: 0rem;
    left: 0rem;
    width: 20rem;
    height: 20rem;
    font-weight: 500;
    font-size: 12rem;
    line-height: 18rem;
    align-items: center;
    text-align: center;
    color: var(--w-white);
    z-index: 1001;
`

function CardIndex({ index }) {
    return (
        <CardIndexDiv>
            <CardIndexSpan>{index}</CardIndexSpan>
        </CardIndexDiv>
    )
}

export default CardIndex
