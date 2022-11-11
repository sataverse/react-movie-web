import styled from 'styled-components'

const CardTextTitleSpan = styled.span`
    width: 180rem;
    height: 24rem;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: var(--w-black);
`

function CardTextTitle({ text }) {
    return <CardTextTitleSpan>{text}</CardTextTitleSpan>
}

export default CardTextTitle
