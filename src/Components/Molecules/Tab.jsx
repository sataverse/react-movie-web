import styled from 'styled-components'
import { useState } from 'react'

const TabWrapper = styled.div`
    width: 1280px;
    height: 50px;
    border-bottom: 1px solid var(--w-graywhite);
`

const TabElement = styled.div`
    position: relative;
    width: 180px;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    text-align: center;
    color: ${(props) => {
        if (props.current) return 'var(--w-black)'
        else return 'var(--w-gray)'
    }};
    cursor: pointer;
`

const TabBorderBottom = styled.div`
    position: relative;
    width: 180px;
    height: 2px;
    background-color: var(--w-black);
    transition: 0.3s;
    left: ${(props) => {
        if (props.tabType == 1) return '0px'
        else return '180px'
    }};
`

function Tab({ tabType, changeTab }) {
    return (
        <>
            <TabWrapper className='fc'>
                <div className='fr'>
                    <TabElement current={tabType == 1} onClick={() => changeTab(1)} className='no-drag'>
                        좋아요
                    </TabElement>
                    <TabElement current={tabType == 2} onClick={() => changeTab(2)} className='no-drag'>
                        평가함
                    </TabElement>
                </div>
                <TabBorderBottom tabType={tabType} />
            </TabWrapper>
        </>
    )
}

export default Tab
