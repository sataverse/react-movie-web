import styled from 'styled-components'
import SearchCardImage from '../Atoms/SearchMovieCard/SearchCardImage'
import SearchCardTextTitle from '../Atoms/SearchMovieCard/SearchCardTextTitle'
import SearchCardStory from '../Atoms/SearchMovieCard/SearchCardStory'
import SearchCardTextScore from '../Atoms/SearchMovieCard/SearchCardTextScore'
import SearchCardTextDesc from '../Atoms/SearchMovieCard/SearchCardTextDesc'

const SearchCardDiv = styled.div`
    position: relative;
    width: 600rem;
    height: 140rem;
    background-color: var(--w-background);
    border: 1px solid #d8d8d8;
    box-shadow: 4rem 4rem 8rem rgba(0, 0, 0, 0.1);
    border-radius: 6rem;
    cursor: pointer;
`

function SearchCard({ id, title, desc, overview, score, posterUrl, type, showModal }) {
    if (type != 'person') {
        return (
            <SearchCardDiv
                className='fr fsbetween no-drag'
                onClick={() => {
                    showModal(id, type)
                }}>
                <SearchCardImage posterUrl={posterUrl} />
                <div className='fc fcenter' style={{ flex: '1', margin: '16rem 16rem 16rem 16rem' }}>
                    <div className='fr fsbetween'>
                        <div className='fr'>
                            <SearchCardTextTitle text={title} />
                            <SearchCardTextDesc text={desc} />
                        </div>
                        <SearchCardTextScore text={score} />
                    </div>
                    <SearchCardStory overview={overview} />
                </div>
            </SearchCardDiv>
        )
    } else {
        return (
            <SearchCardDiv
                className='fr fsbetween no-drag'
                onClick={() => {
                    showModal(id)
                }}>
                <SearchCardImage posterUrl={posterUrl} />
                <div className='fc fcenter' style={{ flex: '1', margin: '16rem 16rem 16rem 16rem' }}>
                    <div className='fr fsbetween'>
                        <SearchCardTextTitle text={title} />
                        <SearchCardTextDesc text={desc} />
                    </div>
                    <SearchCardStory overview={overview} />
                </div>
            </SearchCardDiv>
        )
    }
}

export default SearchCard
