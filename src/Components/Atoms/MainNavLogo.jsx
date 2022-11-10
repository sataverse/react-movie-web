import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainNavLogoWrapper = styled.span`
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32rem;
    color: var(--w-red);
`

function MainNavLogo() {
    return (
        <Link to={'/'} className='no-underline'>
            <MainNavLogoWrapper>MOVIE</MainNavLogoWrapper>
        </Link>
    )
}

export default MainNavLogo
