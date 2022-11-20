import styled from 'styled-components'

const SearchCardTextScoreSpan = styled.span`
    position: absolute;
    top: 5rem;
    left: 440rem;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14rem;
    margin-top: -4rem;
    color: ${(props) => {
        if (props.text >= 70) return '#2FCC5B'
        else if (props.text < 50) return '#F23535'
        else return '#FF9900'
    }};
`

function SearchCardTextScore({ text }) {
    return <SearchCardTextScoreSpan text={text}>{text}%</SearchCardTextScoreSpan>
}

export default SearchCardTextScore
