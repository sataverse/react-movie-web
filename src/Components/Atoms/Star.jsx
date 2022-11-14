import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StarDiv = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
`

function Star({ beforeRate, afterRate, index, mouseOverStar, mouseClickStar }) {
    const [leftColor, setLeftColor] = useState('#D8D8D8')
    const [rightColor, setRightColor] = useState('#D8D8D8')

    useEffect(() => {
        if (afterRate - index == 0) {
            setLeftColor('#FF9900')
            setRightColor('#D8D8D8')
        } else if (afterRate - index >= 1) {
            setLeftColor('#FF9900')
            setRightColor('#FF9900')
        } else if (afterRate - index <= -1) {
            setLeftColor('#D8D8D8')
            setRightColor('#D8D8D8')
        }
    })

    function changeColorWhenMouseOver(e) {
        if (e.target.id == 'left-star') {
            mouseOverStar(index)
        } else if (e.target.id == 'right-star') {
            mouseOverStar(index + 1)
        }
    }



    return (
        <StarDiv>
            <svg id='left-star' width='10' height='20' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg'
                onMouseOver={changeColorWhenMouseOver}
                onClick={() => mouseClickStar()}>
                <g clipPath='url(#clip0_229_516)'>
                    <path
                        d='M10 15.31V0L7.57 8H0L6.18 12.41L3.83 20L10 15.31Z'
                        fill={leftColor}
                    />
                </g>
            </svg>
            <svg id='right-star' width='10' height='20' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg'
                onMouseOver={changeColorWhenMouseOver}
                onClick={() => mouseClickStar()}>
                <g clipPath='url(#clip0_229_520)'>
                    <path
                        d='M0 15.31V0L2.43 8H10L3.82 12.41L6.17 20L0 15.31Z'
                        fill={rightColor}
                    />
                </g>
            </svg>
        </StarDiv>
    )
}

export default Star
