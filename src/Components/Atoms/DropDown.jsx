import { useState } from 'react'
import styled from 'styled-components'

const DropDownMain = styled.div`
    width: 100rem;
    height: 30rem;
    font-weight: 400;
    font-size: 14px;
    color: var(--w-black);
    text-align: center;
    line-height: 28rem;
    background-color: #ebebeb;
    border-radius: 6rem;
    &:hover {
        background-color: var(--w-graywhite);
    }
`

const DropDownList = styled.div`
    width: 100rem;
    border-radius: 6rem;
    margin-top: -30rem;
    box-shadow: 0px 0px 4px var(--w-red);
`

const DropDownElement = styled.div`
    width: 100rem;
    height: 30rem;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--w-black);
    text-align: center;
    line-height: 28rem;
    cursor: pointer;
    &:hover {
        background-color: #e0e0e0;
    }
`

function DropDown() {
    const [isClick, setClick] = useState(false)
    const [current, setCurrent] = useState('인기순')
    function showList() {
        console.log('click')
        setClick(!isClick)
    }
    function changeCurrent(type) {
        if (isClick) setCurrent(type)
    }
    return (
        <>
            <DropDownMain onClick={showList}>{current}</DropDownMain>
            {isClick && (
                <DropDownList>
                    <DropDownElement onClick={showList}>{current}</DropDownElement>
                    <DropDownElement key={1} onClick={changeCurrent('인기순')}>
                        인기순
                    </DropDownElement>
                    <DropDownElement key={2} onClick={changeCurrent('최신순')}>
                        최신순
                    </DropDownElement>
                    <DropDownElement key={3} onClick={changeCurrent('이름순')}>
                        이름순
                    </DropDownElement>
                    <DropDownElement key={4} onClick={changeCurrent('평점순')}>
                        평점순
                    </DropDownElement>
                </DropDownList>
            )}
        </>
    )
}

export default DropDown
