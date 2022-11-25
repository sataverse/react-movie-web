import { useState } from 'react'
import styled from 'styled-components'
import Star from '../Star'

const ModalMyScoreDiv = styled.div`
    width: 120rem;
    height: 20rem;
`

function ModalMyScore({ rate }) {
    const [beforeRate, setBeforeRate] = useState(rate)
    const [afterRate, setAfterRate] = useState(rate)

    async function mouseClickStar() {
        setBeforeRate(afterRate)
    }
    async function mouseOverStar(index) {
        setAfterRate(index)
    }

    return (
        <ModalMyScoreDiv className='fr fsbetween vcenter' onMouseLeave={() => mouseOverStar(beforeRate)}>
            <Star beforeRate={beforeRate} afterRate={afterRate} index={1} mouseOverStar={mouseOverStar} mouseClickStar={mouseClickStar} />
            <Star beforeRate={beforeRate} afterRate={afterRate} index={3} mouseOverStar={mouseOverStar} mouseClickStar={mouseClickStar} />
            <Star beforeRate={beforeRate} afterRate={afterRate} index={5} mouseOverStar={mouseOverStar} mouseClickStar={mouseClickStar} />
            <Star beforeRate={beforeRate} afterRate={afterRate} index={7} mouseOverStar={mouseOverStar} mouseClickStar={mouseClickStar} />
            <Star beforeRate={beforeRate} afterRate={afterRate} index={9} mouseOverStar={mouseOverStar} mouseClickStar={mouseClickStar} />
        </ModalMyScoreDiv>
    )
}

export default ModalMyScore
