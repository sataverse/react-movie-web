import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { getDetailContentFromAPI } from '../../Modules/utils'
import ModalBigImage from '../Atoms/Modal/ModalBigImage'
import ModalCloseButton from '../Atoms/Modal/ModalCloseButton'
import ModalScrollDownButton from '../Atoms/Modal/ModalScrollDownButton'

const ModalDetailContentBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    animation: fadeInForModal ease 0.3s forwards;

    @keyframes fadeInForModal {
        from {
            background-color: transparent;
            backdrop-filter: blur(0);
        }
        to {
            background-color: #00000040;
            backdrop-filter: blur(3rem);
        }
    }
`

const ModalDetailContentDiv = styled.div`
    position: relative;
    width: 1400rem;
    height: 800rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ModalDetailContentScrollArea = styled.div`
    position: relative;
    width: 100%;
`

const ModalCloseButtonWrapper = styled.div`
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    width: 1400rem;
    height: 40rem;
`

const ModalScrollDownButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: -60rem;
    transform: translateX(-50%);
    bottom: 60rem;
    width: 40rem;
    height: 40rem;
`

const ModalDetailContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 2000rem;
    background-color: white;
`

const Test = styled.div`
    background-color: yellow;
    height: 200rem;
    margin: 0;
    padding: 0;
`

function ModalDetailContent({ id, hideModal }) {
    const { data, imageSrc } = getDetailContentFromAPI(id)
    const modalWrapper = useRef(null)
    async function scrollDownModal() {
        modalWrapper.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <ModalDetailContentBackground
            onClick={() => {
                hideModal()
            }}>
            <ModalCloseButtonWrapper className='fr fright'>
                <ModalCloseButton hideModal={hideModal}></ModalCloseButton>
            </ModalCloseButtonWrapper>
            <ModalDetailContentDiv
                onClick={(event) => {
                    event.stopPropagation()
                }}>
                <ModalDetailContentScrollArea className='fc fleft'>
                    <ModalBigImage imageSrc={imageSrc} />
                    <ModalDetailContentWrapper className='fc fleft'>
                        <ModalScrollDownButtonWrapper>
                            <ModalScrollDownButton scrollDownModal={scrollDownModal} />
                        </ModalScrollDownButtonWrapper>
                        <Test ref={modalWrapper}>테스트</Test>
                    </ModalDetailContentWrapper>
                </ModalDetailContentScrollArea>
            </ModalDetailContentDiv>
        </ModalDetailContentBackground>
    )
}

export default ModalDetailContent
