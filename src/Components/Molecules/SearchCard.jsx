import styled from 'styled-components'
import SearchCardImage from '../Atoms/SearchMovieCard/SearchCardImage'
import SearchCardTextTitle from '../Atoms/SearchMovieCard/SearchCardTextTitle'
import SearchCardStory from '../Atoms/SearchMovieCard/SearchCardStory'
import SearchCardTextScore from '../Atoms/SearchMovieCard/SearchCardTextScore'
import SearchCardTextDesc from '../Atoms/SearchMovieCard/SearchCardTextDesc'
import SearchCardImagePerson from '../Atoms/SearchMovieCard/SearchCardImagePerson'

const SearchCardDiv = styled.div`
    position: relative;
    width: 600rem;
    height: 140rem;
    background-color: var(--w-background);
    border: 1px solid #D8D8D8;
    box-shadow: 4rem 4rem 8rem rgba(0, 0, 0, 0.1);
    border-radius: 6rem;
    cursor: pointer;
`

const Wrapper1 = styled.div`
    position: absolute;
    top: 15rem;
    left: 112rem;
    width: 468rem;
    height: 23rem;
    overflow: hidden;
    background-color: var(--w-background)
`

function SearchCard({ id, title, desc, overview, score, posterUrl, type, showModal }) {
    if (type != 'person') {
        return (
            <SearchCardDiv
                className='fc no-drag'
                onClick={() => {
                    showModal(id)
                }}>
                <SearchCardImage posterUrl={posterUrl} />
                <Wrapper1>
                    <SearchCardTextTitle text={title} />
                    <SearchCardTextDesc text={desc} />
                    <SearchCardTextScore text={score} />
                </Wrapper1>
                <SearchCardStory overview={overview} />

            </SearchCardDiv>
        )
    }
    else {
        return (
            <SearchCardDiv
                className='fc no-drag'
                onClick={() => {
                    showModal(id)
                }}>
                <SearchCardImagePerson posterUrl={posterUrl} />
                <Wrapper1>
                    <SearchCardTextTitle text={title} />
                    <SearchCardTextDesc text={desc} />
                </Wrapper1>
                <SearchCardStory overview={overview} />

            </SearchCardDiv>
        )
    }
}

export default SearchCard
