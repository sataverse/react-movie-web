import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

const SubHeaderWrapper = styled.div`
    width: 100vw;
    height: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: left;
    background-color: var(--w-red);
`

const SubHeaderUl = styled.ul`
    position: relative;
    left: 50%;
    height: 30rem;
    width: 1280rem;
    overflow: hidden;
    transform: translateX(-50%);
`

const SubHeaderDiv = styled.div`
    transform: translateY(${(props) => props.$pos}px);
    transition: transform 2s;
`

const SubHeaderLi = styled.div`
    height: 26rem;
    line-height: 20rem;
    font-size: 14px;
    color: var(--w-white);
`

function SubHeader() {
    const [currentIdx, setCurrentIdx] = useState(0)
    const refIdx = useRef(0)

    const notice = [
        '[공지] 서버 점검 긴급 공지 12.04 06:00~08:00', 
        '몸값 | 전선규x전종서x장률, 압도적 연기 시너지', 
        '버튼게임 | 총 9억 원의 상금을 차지하라!💰',
        '술꾼도시여자들 | 시즌2 오픈 전에 빨리 정주행하세요!',
        '[이벤트] 777개의 선물받고, 연애 리얼리티 레전드를 만나보세요!',
        '...'
    ]

    useEffect(() => {
        setInterval(() => {
            refIdx.current = (refIdx.current + 1) % notice.length
            setCurrentIdx(refIdx.current)
        }, 5000)
        return () => {
            setCurrentIdx(0)
            refIdx.current = 0
        }
    }, [notice.length])

    return (
        <SubHeaderWrapper className='hcenter'>
            <SubHeaderUl>
                <SubHeaderDiv $pos={-30*currentIdx}>
                    {notice.map((n, i) => <SubHeaderLi key={i}>{n}</SubHeaderLi>)}
                </SubHeaderDiv>
            </SubHeaderUl>
        </SubHeaderWrapper>
    )
}

export default SubHeader
