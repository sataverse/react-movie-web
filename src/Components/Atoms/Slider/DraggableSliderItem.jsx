import styled from 'styled-components'

const DraggableSliderItemSpan = styled.span`
    width: max-content;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: var(--w-black);
    cursor: pointer;
`

function DraggableSliderItem({ text }) {
    return <DraggableSliderItemSpan>{text}</DraggableSliderItemSpan>
}

export default DraggableSliderItem
