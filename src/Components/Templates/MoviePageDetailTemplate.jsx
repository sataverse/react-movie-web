import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';
import { useParams } from 'react-router-dom'

const MoviePageDetailTemplateWrapper = styled.div `
    
`

function MoviePageDetailTemplate() {
    let { id } = useParams();
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <MoviePageDetailTemplateWrapper className='fc fleft'>
                MoviePageDetailTemplateWrapper {id}
            </MoviePageDetailTemplateWrapper>
        </>
    )
}

export default MoviePageDetailTemplate