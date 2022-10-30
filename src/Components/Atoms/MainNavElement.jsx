import styled from 'styled-components'
import { Link } from 'react-router-dom';

const MainNavElementWrapper = styled.span `
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16rem;
    color: var(--w-black);
`;

function MainNavElement({text, page}) {
    return (
        <Link to={`/${page}`} className='no-underline'>
            <MainNavElementWrapper>
                {text}
            </MainNavElementWrapper>
        </Link>
    )
}

export default MainNavElement
