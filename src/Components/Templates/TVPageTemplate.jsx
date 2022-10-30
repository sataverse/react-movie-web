import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';

const TVPageTemplateWrapper = styled.div `
    
`

function TVPageTemplate() {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <TVPageTemplateWrapper className='fc fleft'>
            TVPageTemplate
            </TVPageTemplateWrapper>
        </>
    )
}

export default TVPageTemplate