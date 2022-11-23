import styled from 'styled-components'

const SearchCardStorySpan = styled.div`
    position: absolute;
    left: 112rem;
    top: 49rem;
    width: 468rem;
    height: 68rem;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14rem;
    color: #696969;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 150%;
`

function SearchCardStory({ overview }) {
    return <SearchCardStorySpan>{overview}</SearchCardStorySpan>
}

export default SearchCardStory
