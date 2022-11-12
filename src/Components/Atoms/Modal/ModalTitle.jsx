import styled from 'styled-components'

const ModalTitleSpan = styled.span`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 36rem;
    margin-top: -10rem;
    color: var(--w-black);
`

function ModalTitle({ title }) {
    return <ModalTitleSpan>{title}</ModalTitleSpan>
}

export default ModalTitle
