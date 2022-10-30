import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';

const MoviePageTemplateWrapper = styled.div `
    
`

function MoviePageTemplate() {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <MoviePageTemplateWrapper className='fc fleft'>
                MoviePageTemplate
            </MoviePageTemplateWrapper>
        </>
    )
}

export default MoviePageTemplate