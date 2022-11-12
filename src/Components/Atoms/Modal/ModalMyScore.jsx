import { useState } from 'react'
import styled from 'styled-components'
import Star from '../Star'

const ModalMyScoreDiv = styled.div`
    width: 120rem;
    height: 20rem;
`

function ModalMyScore({ rate = 10 }) {
    const [hoverIndex, setHoverIndex] = useState(0)
    async function mouseOverIndex(index) {
        setHoverIndex(index)
    }
    return (
        <ModalMyScoreDiv className='fr fsbetween vcenter'>
            <Star rate={rate} index={0} mouseOverIndex={mouseOverIndex} hoverIndex={hoverIndex} />
            <Star rate={rate} index={2} mouseOverIndex={mouseOverIndex} hoverIndex={hoverIndex} />
            <Star rate={rate} index={4} mouseOverIndex={mouseOverIndex} hoverIndex={hoverIndex} />
            <Star rate={rate} index={6} mouseOverIndex={mouseOverIndex} hoverIndex={hoverIndex} />
            <Star rate={rate} index={8} mouseOverIndex={mouseOverIndex} hoverIndex={hoverIndex} />
        </ModalMyScoreDiv>
    )
}

export default ModalMyScore
