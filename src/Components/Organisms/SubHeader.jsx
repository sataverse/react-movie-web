import styled from 'styled-components'

const SubHeaderWrapper = styled.div`
    width: 100vw;
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: var(--w-red);
`

function MainHeader() {
    return <SubHeaderWrapper className='hcenter'>Sign Up Sign In</SubHeaderWrapper>
}

export default MainHeader
