import styled from 'styled-components'
import MainNavElement from '../Atoms/MainNavElement'

const MainHeaderNavWrapper = styled.div `
    width: 250rem;
`;

function MainHeaderNav() {
    return (
        <MainHeaderNavWrapper className='fr fsbetween'>
            <MainNavElement text={'영화'} page={'movie'}></MainNavElement>
            <MainNavElement text={'TV 프로그램'} page={'tv'}></MainNavElement>
            <MainNavElement text={'인물'} page={'person'}></MainNavElement>
        </MainHeaderNavWrapper>
    )
}

export default MainHeaderNav
