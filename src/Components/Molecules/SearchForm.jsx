import styled from 'styled-components'

const SearchFormWrapper = styled.div `
    position: relative;
    height: 35rem;
    margin-right: 18rem;

    @media (max-width: 616px) {
        & {
            display: none;
        }
    } 
    @media (min-width: 617px) and (max-width: 899px) {
        & {
            width: 100%;
        }
    }
    @media (min-width: 900px) and (max-width: 999px) {
        & {
            width: 100%;
        }
    } 
    @media (min-width: 1000px) and (max-width: 1279px) {
        & {
            width: 400rem;
        }
    } 
    @media (min-width: 1280px) and (max-width: 1439px) {
        & {
            width: 400rem;
        }
    }
    @media (min-width: 1380px) {
        & {
            width: 400rem;
        }
    }
`;

const SearchIcon = styled.div `
    position: relative;
    width: 16rem;
    height: 16rem;
    top: 10rem;
`;

const SearchInputWrapper = styled.input `
    position: absolute;
    top: 0rem;
    width: calc(100% - 32rem);
    border: 0;
    color: var(--w-gray);
    border-bottom: 1px solid var(--w-gray);
    background-color: transparent;
    height: 35rem;

    &:focus {
        outline: none;
        border-bottom: 1px solid var(--w-gray);
    }

    &:valid { 
        padding-left: 30rem;
    }

    &::placeholder {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 14rem;
        color: var(--w-gray);
    }

    &:focus {
        border-bottom: 1px solid var(--w-red);
    }

    &:focus + ${SearchIcon} svg circle {
        stroke: var(--w-red);
    }

    &:focus + ${SearchIcon} svg rect {
        fill: var(--w-red);
    }
`


function SearchForm() {
    return (
        <SearchFormWrapper>
            <SearchInputWrapper spellCheck={false} type='text' placeholder='영화, TV 프로그램, 인물을 찾아보세요'/>
            <SearchIcon>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.57145" cy="8.20186" r="5" transform="rotate(-40 8.57145 8.20186)" stroke="#252525"/>
                    <rect x="11.0811" y="11.9703" width="1" height="7" transform="rotate(-40 11.0811 11.9703)" fill="#252525"/>
                </svg>
            </SearchIcon>
        </SearchFormWrapper>
    )
}

export default SearchForm
