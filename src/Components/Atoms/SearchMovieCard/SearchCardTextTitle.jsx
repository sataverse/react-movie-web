import styled from 'styled-components'

const SearchCardTextTitleSpan = styled.span`
    width: 180rem;
    height: 23rem;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 14rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: var(--w-black);
`

function SearchCardTextTitle({ text }) {
    return <SearchCardTextTitleSpan>{text}</SearchCardTextTitleSpan>
}

export default SearchCardTextTitle
