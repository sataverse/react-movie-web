import styled from 'styled-components'
import Logo from '../Svg/Logo'

const MainLogo = styled.span`
    font-family: 'PT Sans', sans-serif !important;
    font-style: normal;
    font-weight: 700;
    font-size: 40rem;
    text-align: center;
    color: var(--w-red);
    line-height: 160rem;
    &:hover {
        cursor: default;
    }
`

function ModalMainLogo() {
    return (
        <MainLogo>
            <Logo width={150} height={60} />
        </MainLogo>
    )
}

export default ModalMainLogo
