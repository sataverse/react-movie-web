import styled from 'styled-components'

const ModalCloseButtonButton = styled.button`
    width: 40rem;
    height: 40rem;
    padding: 0px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`

function ModalCloseButton({ hideModal }) {
    return (
        <ModalCloseButtonButton onClick={hideModal}>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 10L30 30' stroke='#252525' />
                <path d='M10 30L30 10' stroke='#252525' />
            </svg>
        </ModalCloseButtonButton>
    )
}

export default ModalCloseButton
