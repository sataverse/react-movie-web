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
            </TVPageTemplateWrapper>
        </>
    )
}

export default TVPageTemplate