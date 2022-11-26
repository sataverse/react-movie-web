import { useRef, useState } from 'react'
import styled from 'styled-components'
import Star from '../Star'
import UserStore from '../../../Modules/UserStore'

const Stars = styled.div`
    width: 140rem;
    height: 30rem;
    column-gap: 5rem;
    margin-right: -12rem;
`
const DateText = styled.div`
    width: 140rem;
    margin-right: -12rem;
    margin-top: 2rem;
    text-align: center;
`

function findRateByX(x) {
    if (x < 10) {
        return 0
    } else if (x >= 10 && x < 20) {
        return 1
    } else if (x >= 20 && x < 35) {
        return 2
    } else if (x >= 35 && x < 45) {
        return 3
    } else if (x >= 45 && x < 60) {
        return 4
    } else if (x >= 60 && x < 70) {
        return 5
    } else if (x >= 70 && x < 85) {
        return 6
    } else if (x >= 85 && x < 95) {
        return 7
    } else if (x >= 95 && x < 110) {
        return 8
    } else if (x >= 110 && x < 120) {
        return 9
    } else if (x >= 120) {
        return 10
    }
}

function ModalMyScore({ id, type, myRate, date }) {
    const starsWrapper = useRef(null)
    const [tempRate, setTempRate] = useState(0)
    const [rate, setRate] = useState(myRate)
    function hoverStars() {
        let bounds = starsWrapper.current.getBoundingClientRect()
        let x = event.clientX - bounds.left
        setTempRate(findRateByX(x))
    }
    function clickStars() {
        let bounds = starsWrapper.current.getBoundingClientRect()
        let x = event.clientX - bounds.left
        setRate(findRateByX(x))
        UserStore.insertStar(id, type, findRateByX(x))
    }
    return (
        <div className='fc'>
            <Stars
                className='fr fcenter'
                onMouseLeave={() => {
                    setTempRate(0)
                }}
                onMouseMove={hoverStars}
                onClick={clickStars}
                ref={starsWrapper}>
                <Star realLeft={rate >= 1} realRight={rate >= 2} tempLeft={tempRate >= 1} tempRight={tempRate >= 2} />
                <Star realLeft={rate >= 3} realRight={rate >= 4} tempLeft={tempRate >= 3} tempRight={tempRate >= 4} />
                <Star realLeft={rate >= 5} realRight={rate >= 6} tempLeft={tempRate >= 5} tempRight={tempRate >= 6} />
                <Star realLeft={rate >= 7} realRight={rate >= 8} tempLeft={tempRate >= 7} tempRight={tempRate >= 8} />
                <Star realLeft={rate >= 9} realRight={rate >= 10} tempLeft={tempRate >= 9} tempRight={tempRate >= 10} />
            </Stars>
            <DateText>
                {date.replace('-', '년 ').replace('-', '월 ')}
                {date != '' ? '일에 평가함' : ''}
            </DateText>
        </div>
    )
}

export default ModalMyScore
