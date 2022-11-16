import styled from 'styled-components'

const ModalHorizontalCloseDiv = styled.div`
    position: absolute;
    width: 80%;
    height: 2%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: ${(props) => {
        if (props.$modalSize == 'middle') return '415px'
        else return '90px'
    }};
    border: 0;
    border-top: 1.5px solid var(--w-graywhite);
`

const ModalHorizontalCloseButtonButton = styled.button`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: ${(props) => {
        if (props.$modalSize == 'middle') return '425px'
        else return '105px'
    }};
    border: 0;
    background-color: transparent;
    font-size: 16rem;
    font-weight: 500;
    color: var(--w-red);
    cursor: pointer;
`

function ModalHorizontalCloseButton({ modalSize, hideThisModal }) {
    return (
        <>
            <ModalHorizontalCloseDiv $modalSize={modalSize}></ModalHorizontalCloseDiv>
            <ModalHorizontalCloseButtonButton onClick={() => hideThisModal()} $modalSize={modalSize}>
                닫기
            </ModalHorizontalCloseButtonButton>
        </>
    )
}

export default ModalHorizontalCloseButton
