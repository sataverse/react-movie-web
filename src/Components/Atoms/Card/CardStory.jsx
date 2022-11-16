import styled from 'styled-components'

const CardStorySpan = styled.div`
    position: absolute;
    left: 30rem;
    top: 30rem;
    width: 340rem;
    font-weight: 400;
    font-size: 14rem;
    color: var(--w-white);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 2em;
    height: 14em;
`

function CardStory({ overview }) {
    return <CardStorySpan>{overview}</CardStorySpan>
}

export default CardStory
