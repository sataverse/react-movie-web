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

function SearchCardImagePerson({ posterUrl }) {
    return <SearchCardImageImg className='no-drag' loading='lazy' src={`http://image.tmdb.org/t/p/original/${posterUrl}?api_key=6199da9940f55ef72ddc1512ea6eca9a`} />
}

export default SearchCardImagePerson
