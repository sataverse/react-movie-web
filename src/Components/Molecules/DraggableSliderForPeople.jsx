import { useState, useRef } from 'react'
import styled from 'styled-components'
import DraggableSliderItemForPeople from '../Atoms/Slider/DraggableSliderItemForPeople'

const DraggableSliderForPerpleWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-flow: column;
    width: 1000rem;
    height: 250rem;
    overflow-x: scroll;
    overflow-y: hidden;
    column-gap: 20rem;
    row-gap: 5rem;
    &::-webkit-scrollbar {
        height: 1px;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
        background: var(--w-graywhite);
    }
`

function DraggableSliderForPeople({ creditData, hideModal }) {
    const [isMouseDown, setMouseDown] = useState(false)
    const [isMouseMove, setMouseMove] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const slider2 = useRef(null)

    function mouseDownEvent() {
        setMouseDown(true)
        setStartX(event.pageX - slider2.current.offsetLeft)
        setScrollLeft(slider2.current.scrollLeft)
    }
    function mouseUpEvent() {
        setMouseDown(false)
    }

    function mouseMoveEvent() {
        event.preventDefault()
        if (isMouseDown) {
            const x = event.pageX - slider2.current.offsetLeft
            const scroll = x - startX
            slider2.current.scrollLeft = scrollLeft - scroll
            setMouseMove(true)
        }
    }

    function mouseLeaveEvent() {
        if (isMouseDown) {
            setMouseDown(false)
        }
    }

    return (
        <DraggableSliderForPerpleWrapper
            className='no-drag'
            ref={slider2}
            onMouseDown={mouseDownEvent}
            onMouseUp={mouseUpEvent}
            onMouseMove={mouseMoveEvent}
            onMouseLeave={mouseLeaveEvent}>
            {creditData.map((item) => {
                return (
                    <DraggableSliderItemForPeople
                        className='no-drag'
                        name={item.original_name}
                        character={item.character}
                        src={item.profile_path}
                        id={item.id}
                        key={`credit-${item.id}`}
                        hideModal={hideModal}
                    />
                )
            })}
        </DraggableSliderForPerpleWrapper>
    )
}

export default DraggableSliderForPeople
