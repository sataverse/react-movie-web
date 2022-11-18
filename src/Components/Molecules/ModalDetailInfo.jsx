import styled from 'styled-components'

const ModalDetailInfoWrapper = styled.div`
    width: fit-content;
    height: 60rem;
    margin-left: 10rem;
    margin-right: 10rem;
`

const ModalDetailInfoText1 = styled.div`
    font-weight: 400;
    font-size: 14rem;
    line-height: 22rem;
    color: #777777;
`

const ModalDetailInfoText2 = styled.div`
    font-weight: 400;
    font-size: 14rem;
    line-height: 22rem;
    height: 22rem;
    color: var(--w-black);
`

function ModalDetailInfo({ text1, text2 }) {
    return (
        <ModalDetailInfoWrapper className='fc fsevenly'>
            <div>
                <ModalDetailInfoText1>{text1}</ModalDetailInfoText1>
                <ModalDetailInfoText2>{text2}</ModalDetailInfoText2>
            </div>
        </ModalDetailInfoWrapper>
    )
}

export default ModalDetailInfo
