import styled from 'styled-components'

const CardTextScoreSpan = styled.span`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16rem;
    margin-top: -4rem;
    color: ${(props) => {
        if (props.text >= 70) return '#2FCC5B'
        else if (props.text < 50) return '#F23535'
        else return '#FF9900'
    }};
`

function CardTextScore({ text }) {
    return <CardTextScoreSpan text={text}>{text}%</CardTextScoreSpan>
}

export default CardTextScore
