import styled from 'styled-components'

const MainSectionWrapper = styled.div `
    width: 100vw;
    height: 150rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: var(--w-gray);
`;

function MainSection() {
    return (
        <MainSectionWrapper className='hcenter'></MainSectionWrapper>
    )
}

export default MainSection
