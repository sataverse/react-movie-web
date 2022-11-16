import styled from 'styled-components'

const ModalStorySpan = styled.span`
    margin-top: 10rem;
    font-weight: 400;
    font-size: 16rem;
    line-height: 180%;
    color: var(--w-black);
    overflow: hidden;
    position: relative;
    height: 200rem;
    width: 100%;
    text-overflow: ellipsis;
`

function ModalStory({ story }) {
    return <ModalStorySpan>{story}</ModalStorySpan>
}

export default ModalStory
