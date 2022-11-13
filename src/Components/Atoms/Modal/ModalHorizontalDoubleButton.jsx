import styled from 'styled-components'

const ModalHorizontalDiv = styled.div`
    position: absolute;
    width: 80%;
    height: 2%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 90px;
    border: 0;
    border-top: 1.5px solid var(--w-graywhite);
`

const ModalHorizontalCancelButton = styled.button`
    position: absolute;
    width: 30%;
    height: 10%;
    left: 20px;
    top: 105px;
    border: 0;
    background-color: transparent;
    font-size: 18px;
    color: #959595;

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

const ModalHorizontalConfirmButton = styled.button`
    position: absolute;
    width: 30%;
    height: 10%;
    right: 20px;
    top: 105px;
    border: 0;
    background-color: transparent;
    font-size: 18px;
    color: var(--w-red);

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

function ModalHorizontalDoubleButton({cancel, confirm}) {
    return (
        <>
            <ModalHorizontalDiv></ModalHorizontalDiv>
            <ModalHorizontalCancelButton onClick={() => cancel()}>취소</ModalHorizontalCancelButton>
            <ModalHorizontalConfirmButton onClick={() => confirm()}>확인</ModalHorizontalConfirmButton>
        </>
    )
}

export default ModalHorizontalDoubleButton