import styled from 'styled-components'

const ModalScoreSpan = styled.span`
    font-weight: 500;
    font-size: 36rem;
    margin-top: -10rem;
    color: ${(props) => {
        if (props.score >= 70) return '#2FCC5B'
        else if (props.score < 50) return '#F23535'
        else return '#FF9900'
    }};
`

function ModalScore({ score }) {
    return <ModalScoreSpan score={score}>{score}%</ModalScoreSpan>
}

export default ModalScore
