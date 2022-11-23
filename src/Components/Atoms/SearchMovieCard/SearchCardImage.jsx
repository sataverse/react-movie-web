import styled from 'styled-components'

const SearchCardImageImg = styled.img`
    width: 92rem;
    height: 138rem;
    left: 1rem;
    top: 1rem;
    transition: all 0.3s;
    border-radius: 6rem;
    &:hover {
        transform: scale(1.05);
    }
`

function SearchCardImage({ posterUrl }) {
    return <SearchCardImageImg className='no-drag' loading='lazy' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterUrl}`} />
}

export default SearchCardImage
