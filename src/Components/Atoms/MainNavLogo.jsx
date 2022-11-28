import styled from 'styled-components'
import Logo from './Svg/Logo'
import { Link } from 'react-router-dom'

const MainNavLogoWrapper = styled.span`
    font-family: 'PT Sans', sans-serif !important;
    font-style: normal;
    font-weight: 700;
    font-size: 32rem;
    color: var(--w-red);
`

function MainNavLogo() {
    return (
        <Link to={'/'} className='no-underline'>
            <MainNavLogoWrapper>
                <Logo width={120} height={48} />
            </MainNavLogoWrapper>
        </Link>
    )
}

export default MainNavLogo
