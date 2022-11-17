import styled from 'styled-components'

const DraggableSliderItemSpan = styled.span`
    width: max-content;
    font-weight: 400;
    font-size: 16rem;
    line-height: 38rem;
    color: var(--w-black);
    cursor: pointer;
`

function DraggableSliderItem({ text, num, changeGenreType }) {
    return <DraggableSliderItemSpan onClick={() => changeGenreType(num)}>{text}</DraggableSliderItemSpan>
}

export default DraggableSliderItem
