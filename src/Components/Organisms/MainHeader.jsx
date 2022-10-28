import styled from 'styled-components'

import MainNavLogo from '../Atoms/MainNavLogo'
import MainHeaderNav from '../Molecules/MainHeaderNav'
import SearchForm from '../Molecules/SearchForm';

const MainHeaderWrapper = styled.div `
    position: sticky;
    top: -1px;
    width: 100vw;
    height: 65rem;
    z-index: 1000;
    background-color: ${props => {
        if (props.$backgroundColor == 'auto')
            return 'var(--w-background)'
        else if (props.$backgroundColor == 'transparent')
            return 'transparent'}
    };
    border-bottom: 1px solid ${props => {
        if (props.$borderBottom == 'auto')
            return '#E6E6E6'
        else if (props.$borderBottom == 'transparent')
            return 'transparent'}
    };;
`;

const MainNavWrapper = styled.div `
    width: 400rem;
    height: 100%;
    padding-right: 100rem;
`;

const MainHeaderContentWrapper = styled.div `
    @media (max-width: 575px) {
        & {
            width: calc(100% - 100rem);
        }
    } 
    @media (min-width: 576px) and (max-width: 767px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        & {
            width: calc(100% - 100rem);
        }
    } 
    @media (min-width: 992px) and (max-width: 1279px) {
        & {
            width: calc(100% - 100rem);
        }
    } 
    @media (min-width: 1280px) and (max-width: 1439px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 1380px) {
        & {
            width: 1280rem;
        }
    }
`;


function MainHeader({backgroundColor="auto", borderBottom="auto"}) {
    return (
        <MainHeaderWrapper className='fr fcenter'  $backgroundColor={backgroundColor} $borderBottom={borderBottom}>
            <MainHeaderContentWrapper className='fr fsbetween'>
                <MainNavWrapper className='fr fsbetween'>
                    <div className='fc fcenter'>
                        <MainNavLogo></MainNavLogo>
                    </div>
                    <div className='fc fcenter'>
                        <MainHeaderNav></MainHeaderNav>
                    </div>
                </MainNavWrapper>
                <div className='fc fcenter'>
                    <SearchForm></SearchForm>
                </div>
            </MainHeaderContentWrapper>
        </MainHeaderWrapper>
    )
}

export default MainHeader
