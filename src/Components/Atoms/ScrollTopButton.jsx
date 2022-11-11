import styled from 'styled-components'

const ScrollTopButtonbutton = styled.button`
    position: fixed;
    right: 5%;
    bottom: 100rem;
    width: 40rem;
    height: 40rem;
    border: 0px;
    cursor: pointer;
    padding: 0;
    background-color: var(--w-background);
`

function ScrollTopButton() {
    const scrollToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <ScrollTopButtonbutton onClick={scrollToTop}>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 28L20 10L38 28' stroke='#252525' />
            </svg>
        </ScrollTopButtonbutton>
    )
}

export default ScrollTopButton
