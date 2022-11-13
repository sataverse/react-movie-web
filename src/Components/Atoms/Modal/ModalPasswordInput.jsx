import styled from 'styled-components'

const ModalPasswordInput = styled.input`
    position: absolute;
    width: 80%;
    height: 8%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 200px;
    border: 0;
    border-radius: 8px;
    background-color: var(--w-graywhite);
    font-size: 16px;

    &:focus {
        outline: 1.8px solid var(--w-red);
    }
`

export default ModalPasswordInput