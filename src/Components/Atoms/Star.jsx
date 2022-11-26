import styled from 'styled-components'
import { useRef, useEffect } from 'react'

function Star({ realLeft, realRight, tempLeft, tempRight }) {
    const leftStar = useRef(null)
    const rightStar = useRef(null)

    useEffect(() => {
        if (realLeft) leftStar.current.style.fill = '#FF9900'
        else if (tempLeft) leftStar.current.style.fill = '#a0a0a0'
        else leftStar.current.style.fill = '#D8D8D8'
        if (realRight) rightStar.current.style.fill = '#FF9900'
        else if (tempRight) rightStar.current.style.fill = '#a0a0a0'
        else rightStar.current.style.fill = '#D8D8D8'
    }, [realLeft, realRight, tempLeft, tempRight])

    return (
        <div style={{ marginTop: '5rem' }}>
            <svg width='10' height='20' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 15.31V0L7.57 8H0L6.18 12.41L3.83 20L10 15.31Z' fill='#D8D8D8' ref={leftStar} />
            </svg>
            <svg width='10' height='20' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 15.31V0L2.43 8H10L3.82 12.41L6.17 20L0 15.31Z' fill='#D8D8D8' ref={rightStar} />
            </svg>
        </div>
    )
}

export default Star
