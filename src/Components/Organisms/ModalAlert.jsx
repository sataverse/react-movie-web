import styled from 'styled-components'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'

const ModalSignInFailedBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const ModalSignInFailedDiv = styled.div`
    position: relative;
    width: 250rem;
    height: 150rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    overflow-y: scroll;
`

const ModalSignInFailedMessage = styled.div`
    position: absolute;
    width: 80%;
    height: 40%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 30px;
    font-size: 16px;
    text-align: center;
`

function ModalSignInFailed({msg, hideThisModal}) {
    return (
        <ModalSignInFailedBackground onClick={() => hideThisModal()}>
            <ModalSignInFailedDiv onClick={(event) => event.stopPropagation()}>
                <ModalSignInFailedMessage>{msg}</ModalSignInFailedMessage>
                <ModalHorizontalCloseButton  modalSize='small' hideThisModal={hideThisModal} />
            </ModalSignInFailedDiv>
        </ModalSignInFailedBackground>
    )
}

export default ModalSignInFailed