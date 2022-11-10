import styled from 'styled-components'

const ScrollTopButtonbutton = styled.button`
    position: fixed;
    right: 200rem;
    bottom: 100rem;
    width: 40rem;
    height: 40rem;
    background-color: red;
    border: 0px;
    cursor: pointer;
`

function ScrollTopButton() {
    return (
        <ScrollTopButtonbutton>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 28L20 10L38 28' stroke='black' />
            </svg>
        </ScrollTopButtonbutton>
    )
}

export default ScrollTopButton
