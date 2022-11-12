import styled from 'styled-components'

const ModalDescSpan = styled.span`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16rem;
    color: var(--w-gray);
    margin-top: 6rem;
    margin-left: 20rem;
`

function ModalDesc({ desc }) {
    return <ModalDescSpan>{desc}</ModalDescSpan>
}

export default ModalDesc
