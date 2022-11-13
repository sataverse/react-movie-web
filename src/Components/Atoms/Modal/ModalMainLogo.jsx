import styled from 'styled-components'

const MainLogo = styled.span`
    position: absolute;
    width: 80%;
    height: 10%;
    top: 60px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40rem;
    text-align: center;
    color: var(--w-red);

    &:hover {
        cursor: default;
    }
`

function ModalMainLogo() {
    return <MainLogo>MOVIE</MainLogo>
}

export default ModalMainLogo