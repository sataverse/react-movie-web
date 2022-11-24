import styled from 'styled-components'

const ModalInputLine = styled.input`
    width: 216rem;
    height: 40rem;
    border: 0;
    border-bottom: 1rem solid var(--w-graywhite);
    font-size: 16rem;
    margin-bottom: 18rem;
    padding-left: 10rem;
    color: var(--w-black);
    &:hover {
        border-bottom: 1rem solid var(--w-red);
    }
    &:focus {
        outline: none;
        border-bottom: 1rem solid var(--w-red);
    }
    &::placeholder {
        font-size: 14rem;
        color: var(--w-gray);
    }
`

export default ModalInputLine