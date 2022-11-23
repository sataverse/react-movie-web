import styled from 'styled-components'

const CardTextDescSpan = styled.span`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14rem;
    margin-top: -1rem;
    padding-left: 15rem;
    color: var(--w-gray);
`

function CardTextDesc({ text }) {
    return <CardTextDescSpan>{text}</CardTextDescSpan>
}

export default CardTextDesc
