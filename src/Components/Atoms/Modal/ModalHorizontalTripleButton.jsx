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

const ModalHorizontalSaveButton = styled.button`
    position: absolute;
    width: 25%;
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

const ModalHorizontalNotSaveButton = styled.button`
    position: absolute;
    width: 25%;
    height: 10%;
    left: 50%;
    transform: translateX(-50%);
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

const ModalHorizontalCancelButton = styled.button`
    position: absolute;
    width: 25%;
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



function ModalHorizontalTripleButton({save, notsave, cancel}) {
    return (
        <>
            <ModalHorizontalDiv />
            <ModalHorizontalSaveButton onClick={() => save()}>저장</ModalHorizontalSaveButton>
            <ModalHorizontalNotSaveButton onClick={() => notsave()}>저장 안 함</ModalHorizontalNotSaveButton>
            <ModalHorizontalCancelButton onClick={() => cancel()}>닫기</ModalHorizontalCancelButton>
        </>
    )
}

export default ModalHorizontalTripleButton