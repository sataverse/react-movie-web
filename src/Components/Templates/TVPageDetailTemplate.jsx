import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';

const TVPageDetailTemplateWrapper = styled.div `
    
`

function TVPageDetailTemplate() {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <TVPageDetailTemplateWrapper className='fc fleft'>
                TVPageDetailTemplateWrapper
            </TVPageDetailTemplateWrapper>
        </>
    )
}

export default TVPageDetailTemplate