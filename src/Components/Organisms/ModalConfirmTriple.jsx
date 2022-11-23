import styled, {keyframes} from 'styled-components'
import ModalHorizontalTripleButton from '../Atoms/Modal/ModalHorizontalTripleButton'

const ModalConfirmBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const ModalConfirmDiv = styled.div`
    position: relative;
    width: 400rem;
    height: 150rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    overflow-y: scroll;
`

const ModalConfirmMessage = styled.div`
    position: absolute;
    width: 80%;
    height: 40%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 40px;
    font-size: 16px;
    text-align: center;
`

function ModalConfirm({msg, save, notsave, cancel}) {
    return (
        <ModalConfirmBackground onClick={() => cancel()}>
            <ModalConfirmDiv onClick={(event) => event.stopPropagation()}>
                <ModalConfirmMessage>{msg}</ModalConfirmMessage>
                <ModalHorizontalTripleButton save={save} notsave={notsave} cancel={cancel}/>
            </ModalConfirmDiv>
        </ModalConfirmBackground>
    )
}

export default ModalConfirm