import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import DetailContentBackgroundImageImg from '../Atoms/Detail/DetailContentBackgroundImage'

const MoviePageDetailTemplateWrapper = styled.div``

function MoviePageDetailTemplate() {
    return (
        <MoviePageDetailTemplateWrapper className='fc fleft'>
            <DetailContentBackgroundImageImg src={'https://www.themoviedb.org/t/p/original/rSGNonLiTSKUjT7HhQSqhpGFihs.jpg'} />
            <MainHeader backgroundColor='transparent' />
            MoviePageDetailTemplateWrapper
        </MoviePageDetailTemplateWrapper>
    )
}

export default MoviePageDetailTemplate
