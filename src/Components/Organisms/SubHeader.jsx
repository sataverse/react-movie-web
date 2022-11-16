import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const SubHeaderWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 30rem;
    background-color: var(--w-red);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

const SubHeaderElement = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1280rem;
    height: 30rem;
    line-height: 30rem;
    font-size: 14rem;
    color: var(--w-white);
`

function useInterval(callback, delay) {
    const savedCallback = useRef()
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

function SubHeader() {
    const notice = [
        '[공지] 서버 점검 긴급 공지 12.04 06:00~08:00',
        '몸값 | 전선규x전종서x장률, 압도적 연기 시너지',
        '버튼게임 | 총 9억 원의 상금을 차지하라!💰',
        '술꾼도시여자들 | 시즌2 오픈 전에 빨리 정주행하세요!',
        '[이벤트] 777개의 선물받고, 연애 리얼리티 레전드를 만나보세요!',
        '[공지] 서버 점검 긴급 공지 12.04 06:00~08:00',
    ]
    const scrollWrapper = useRef(null)
    const [index, setIndex] = useState(0)

    useInterval(() => {
        setIndex((index) => index + 1)
        if (index != 0 && index % 2 == 0) {
            scrollWrapper.current.scrollBy({ top: 30, behavior: 'smooth' })
        }
        if (index == notice.length * 2 - 1) {
            let y = -30 * notice.length
            scrollWrapper.current.scrollBy({ top: y })
        }
    }, 1000)

    return (
        <SubHeaderWrapper ref={scrollWrapper} className='fc'>
            {notice.map((n, i) => (
                <SubHeaderElement key={i}>{n}</SubHeaderElement>
            ))}
        </SubHeaderWrapper>
    )
}

export default SubHeader
