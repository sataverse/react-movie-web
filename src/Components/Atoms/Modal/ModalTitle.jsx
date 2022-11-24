import styled from 'styled-components'

const ModalTitleSpan = styled.span`
    font-weight: 700;
    font-size: 36rem;
    margin-top: -10rem;
    color: var(--w-black);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 620rem;
`

function ModalTitle({ title }) {
    return <ModalTitleSpan>{title}</ModalTitleSpan>
}

export default ModalTitle
