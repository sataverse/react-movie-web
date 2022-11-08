import styled from 'styled-components'
import MainNavLogo from '../Atoms/MainNavLogo'
import MainHeaderNav from '../Molecules/MainHeaderNav'
import SearchForm from '../Molecules/SearchForm'
import MainNavUser from '../Atoms/MainNavUser';

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
`;

const MainNavWrapper = styled.div `
    width: 400rem;
    height: 100%;
    padding-right: 100rem;
`;

const MainHeaderContentWrapper = styled.div `
    position: relative;
    height: 64rem;
    left: 50%;
    transform: translateX(-50%);
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

const MainNavUserWrapper = styled.div `
    width: 400rem;
    height: 100%;
    margin-right: 44rem;
`;

const MainHeaderHr = styled.div `
    width: 1440rem;
    height: 1rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => {
        if (props.$backgroundColor == 'auto')
            return 'var(--w-graywhite)'
        else if (props.$backgroundColor == 'transparent')
            return 'var(--w-white)'}
    };
`;


function MainHeader({backgroundColor="auto"}) {
    return (
        <MainHeaderWrapper className='fc fsbetween' $backgroundColor={backgroundColor}>
            <MainHeaderContentWrapper className='fr fsbetween'>
                <MainNavWrapper className='fr fsbetween'>
                    <div className='fc fcenter'>
                        <MainNavLogo/>
                    </div>
                    <div className='fc fcenter'>
                        <MainHeaderNav backgroundColor={backgroundColor}/>
                    </div>
                </MainNavWrapper>
                <MainNavUserWrapper className='fr fsbetween'>
                    <div className='fc fcenter'>
                        <SearchForm backgroundColor={backgroundColor}/>
                    </div>
                    <div className='fc fcenter'>
                        <MainNavUser/>
                    </div>
                </MainNavUserWrapper>
            </MainHeaderContentWrapper>
            <MainHeaderHr $backgroundColor={backgroundColor}/>
        </MainHeaderWrapper>
    )
}

export default MainHeader
