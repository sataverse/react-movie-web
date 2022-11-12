import styled from 'styled-components'

const ModalStorySpan = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16rem;
    line-height: 180%;
    color: var(--w-black);
    overflow: hidden;
    position: relative;
    height: 250rem;
    width: 100%;
`

function ModalStory({ story }) {
    return <ModalStorySpan>{story}</ModalStorySpan>
}

export default ModalStory
