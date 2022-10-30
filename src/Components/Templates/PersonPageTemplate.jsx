import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';

const PersonPageTemplateWrapper = styled.div `
    
`

function PersonPageTemplate() {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <PersonPageTemplateWrapper className='fc fleft'>
                PersonPageTemplateWrapper
            </PersonPageTemplateWrapper>
        </>
    )
}

export default PersonPageTemplate