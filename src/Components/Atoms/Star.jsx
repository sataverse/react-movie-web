import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StarDiv = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
`

function Star({ rate, index, mouseOverIndex, hoverIndex }) {
    const [leftColor, setLeftColor] = useState('#D8D8D8')
    const [rightColor, setRightColor] = useState('#D8D8D8')
    useEffect(() => {
        if (rate - index == 1) setLeftColor('#FF9900')
        else if (rate - index >= 2) {
            setLeftColor('#FF9900')
            setRightColor('#FF9900')
        } else if (hoverIndex - rate - index > 0) {
            if (leftColor != '#FF9900') setLeftColor('#696969')
            if (rightColor != '#FF9900') setRightColor('#696969')
        }
    })

    function changeColorWhenMouseOver(e) {
        if (e.target.id == 'left-star' && leftColor == '#D8D8D8') {
            setLeftColor('#696969')
            mouseOverIndex(index + 1)
        } else if (e.target.id == 'right-star' && rightColor == '#D8D8D8') {
            setRightColor('#696969')
            mouseOverIndex(index + 2)
        }
    }

    function changeColorWhenMouseLeave(e) {
        if (e.target.id == 'left-star' && leftColor != '#FF9900') {
            setLeftColor('#D8D8D8')
            mouseOverIndex(0)
        } else if (e.target.id == 'right-star' && rightColor != '#FF9900') {
            setRightColor('#D8D8D8')
            mouseOverIndex(0)
        }
    }

    return (
        <StarDiv>
            <svg width='10' height='20' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_229_516)'>
                    <path
                        id='left-star'
                        d='M10 15.31V0L7.57 8H0L6.18 12.41L3.83 20L10 15.31Z'
                        fill={leftColor}
                        onMouseOver={changeColorWhenMouseOver}
                        onMouseLeave={changeColorWhenMouseLeave}
                    />
                </g>
            </svg>
            <svg width='10' height='20' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_229_520)'>
                    <path
                        id='right-star'
                        d='M0 15.31V0L2.43 8H10L3.82 12.41L6.17 20L0 15.31Z'
                        fill={rightColor}
                        onMouseOver={changeColorWhenMouseOver}
                        onMouseLeave={changeColorWhenMouseLeave}
                    />
                </g>
            </svg>
        </StarDiv>
    )
}

export default Star
