import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalHorizontalDoubleButton from '../Atoms/Modal/ModalHorizontalDoubleButton'

const ModalSelectBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const ModalSelectDiv = styled.div`
    position: relative;
    width: 250rem;
    height: 300rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    overflow-y: scroll;
`

const ModalSelectMessage = styled.div`
    position: absolute;
    width: 80%;
    height: 40rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 30rem;
    font-size: 16px;
    text-align: center;
`

const ModalSelectRadio = styled.div`
    position: absolute;
    width: 80%;
    height: 40rem;
    line-height: 40rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10rem;
    background-color: ${(props) => {
        if(props.$selected) return '#fda7a7'
        else return 'transparent'
    }};
    font-size: 16px;
    text-align: center;

    &:hover{
        cursor: pointer;
    }
`

function ModalSelectType({msg, cancel, confirm}) {
    const [type, setType] = useState('movie')

    return (
        <ModalSelectBackground onClick={() => cancel()}>
            <ModalSelectDiv onClick={(event) => event.stopPropagation()}>
                <ModalSelectMessage>{msg}</ModalSelectMessage>
                <ModalSelectRadio style={{top: '100rem'}} onClick={() => setType('movie')} $selected={type=='movie'}>영화</ModalSelectRadio>
                <ModalSelectRadio style={{top: '160rem'}} onClick={() => setType('tv')} $selected={type=='tv'} >TV프로그램</ModalSelectRadio>
                <ModalHorizontalDoubleButton top={230} cancel={cancel} confirm={() => confirm(type)}></ModalHorizontalDoubleButton>
            </ModalSelectDiv>
        </ModalSelectBackground>
    )
}

export default ModalSelectType