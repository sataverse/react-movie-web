import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';

const PersonPageDetailTemplateWrapper = styled.div `
    
`

function PersonPageDetailTemplate() {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <PersonPageDetailTemplateWrapper className='fc fleft'>
                PersonPageDetailTemplate
            </PersonPageDetailTemplateWrapper>
        </>
    )
}

export default PersonPageDetailTemplate