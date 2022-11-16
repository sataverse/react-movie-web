import styled from 'styled-components'

const ModalInput = styled.input`
    width: 216rem;
    height: 40rem;
    border-radius: 8rem;
    border: 1rem solid transparent;
    background-color: var(--w-graywhite);
    font-size: 14rem;
    margin-bottom: 18rem;
    padding-left: 10rem;
    color: var(--w-black);
    &:hover {
        border: 1rem solid var(--w-red);
    }
    &:focus {
        outline: none;
        border: 1rem solid var(--w-red);
    }
    &::placeholder {
        font-size: 14rem;
        color: var(--w-gray);
    }
`

export default ModalInput
