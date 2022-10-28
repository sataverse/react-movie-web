import styled from 'styled-components'

const SearchFormWrapper = styled.div `
    position: relative;
    height: 35rem;

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
`


function SearchForm() {
    return (
        <SearchFormWrapper>
            <SearchIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 9.33333C11.5632 8.29045 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94626 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94626 11.8925C7.4191 11.8925 8.29045 11.5632 9.33333 10.6667L14.6369 16L16 14.6369L10.6667 9.33333ZM5.94626 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94626 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94626 10.0629Z" fill="#8F8F8F"/>
                </svg>
            </SearchIcon>
            <SearchInputWrapper type='text' placeholder='영화, TV 프로그램, 인물을 찾아보세요'/>
        </SearchFormWrapper>
    )
}

export default SearchForm
