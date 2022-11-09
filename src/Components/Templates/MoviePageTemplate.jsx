import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';
import ContentGrid from '../Organisms/ContentGrid';
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'

const MoviePageTemplateWrapper = styled.div `
    position: relative;
    width: 1280rem;
    left: 50%;
    transform: translateX(-50%);
`

function MoviePageTemplate({data}) {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <MoviePageTemplateWrapper className='fc fleft'>
            <ContentSlideSectionTitle text={'🍿 모든 영화'} margin={0}/>
            <ContentGrid data={data}/>
            </MoviePageTemplateWrapper>
        </>
    )
}

export default MoviePageTemplate