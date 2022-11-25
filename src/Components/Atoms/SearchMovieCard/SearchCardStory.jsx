import styled from 'styled-components'

const SearchCardStorySpan = styled.div`
    position: relative;
    width: 100%;
    font-weight: 400;
    font-size: 14rem;
    color: #696969;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 150%;
    margin-top: 10rem;
`

function SearchCardStory({ overview }) {
    return <SearchCardStorySpan>{overview}</SearchCardStorySpan>
}

export default SearchCardStory
