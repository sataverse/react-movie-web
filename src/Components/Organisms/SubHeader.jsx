import styled from 'styled-components'

const SubHeaderWrapper = styled.div`
    width: 100vw;
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: var(--w-red);
`

function SubHeader() {
    return <SubHeaderWrapper className='hcenter'></SubHeaderWrapper>
}

export default SubHeader
