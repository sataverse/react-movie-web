import styled from 'styled-components'

const ModalCloseButtonButton = styled.button`
    position: absolute;
    right: 24rem;
    top: 20rem;
    width: 40rem;
    height: 40rem;
    padding: 0px;
    margin: 0px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`

function ModalCloseButton({ hideModal }) {
    return (
        <ModalCloseButtonButton onClick={hideModal}>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13 13L27 27M13 27L27 13' stroke='#252525' />
            </svg>
        </ModalCloseButtonButton>
    )
}

export default ModalCloseButton
