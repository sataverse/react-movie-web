import styled from 'styled-components'
import ModalCloseButtonButton from '../Atoms/Modal/ModalCloseButton'

const ModalDetailContentBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const ModalDetailContentDiv = styled.div`
    position: relative;
    width: 1400rem;
    height: 800rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    overflow-y: scroll;
`

const TestScroll = styled.div`
    height: 2000rem;
`

function ModalDetailContent({ hideModal }) {
    return (
        <ModalDetailContentBackground
            onClick={() => {
                hideModal()
            }}>
            <ModalDetailContentDiv
                onClick={(event) => {
                    event.stopPropagation()
                }}>
                <ModalCloseButtonButton hideModal={hideModal} />
                <TestScroll />
            </ModalDetailContentDiv>
        </ModalDetailContentBackground>
    )
}

export default ModalDetailContent
