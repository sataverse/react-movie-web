import styled from 'styled-components'
import { Link } from 'react-router-dom';

const MainNavElementWrapper = styled.span `
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16rem;
    color: ${props => {
        if (props.$backgroundColor == 'auto')
            return 'var(--w-black)'
        else if (props.$backgroundColor == 'transparent')
            return 'var(--w-white)'}
    };
`;

function MainNavElement({text, page, backgroundColor="auto"}) {
    return (
        <Link to={`/${page}`} className='no-underline'>
            <MainNavElementWrapper $backgroundColor={backgroundColor}>
                {text}
            </MainNavElementWrapper>
        </Link>
    )
}

export default MainNavElement
