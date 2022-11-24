import styled from 'styled-components'

const CardTextDescSpan = styled.span`
    font-weight: 400;
    font-size: 14rem;
    margin-left: 20rem;
    color: var(--w-gray);
`

function CardTextDesc({ text }) {
    return <CardTextDescSpan>{text}</CardTextDescSpan>
}

export default CardTextDesc
