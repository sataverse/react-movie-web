import styled, {keyframes} from 'styled-components'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'

const ModalAlertBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const ModalAlertDiv = styled.div`
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

const ModalAlertMessage = styled.div`
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
        <ModalAlertBackground onClick={() => hideThisModal()}>
            <ModalAlertDiv onClick={(event) => event.stopPropagation()}>
                <ModalAlertMessage>{msg}</ModalAlertMessage>
                <ModalHorizontalCloseButton  modalSize='small' hideThisModal={hideThisModal} />
            </ModalAlertDiv>
        </ModalAlertBackground>
    )
}

export default ModalSignInFailed