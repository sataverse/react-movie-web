import styled from 'styled-components'
import MainNavElement from '../Atoms/MainNavElement'

const MainHeaderNavWrapper = styled.div `
    width: 250rem;
`;

function MainHeaderNav({backgroundColor="auto"}) {
    return (
        <MainHeaderNavWrapper className='fr fsbetween'>
            <MainNavElement text={'영화'} page={'movie'} backgroundColor={backgroundColor}/>
            <MainNavElement text={'TV 프로그램'} page={'tv'} backgroundColor={backgroundColor}/>
            <MainNavElement text={'인물'} page={'person'} backgroundColor={backgroundColor}/>
        </MainHeaderNavWrapper>
    )
}

export default MainHeaderNav
