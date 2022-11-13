import styled from 'styled-components'
import ModalSignIn from '../Organisms/ModalSignIn'
import ModalSignUp from '../Organisms/ModalSignUp'
import ModalConfirm from './ModalConfirm'
import { useState, useEffect } from 'react'

const SubHeaderWrapper = styled.div`
    width: 100vw;
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: var(--w-red);
`

const SignButton = styled.button`
    position: absolute;
    top: 7px;
    right: ${(props) => props.$right};
    border: 0;
    background-color: transparent;
    font-size: 16px;
    color: var(--w-white);

    &:hover {
        cursor: pointer;
    }
`

function SubHeader() {
    const [signinModal, setSigninModal] = useState(false)
    const [signupModal, setSignupModal] = useState(false)
    const [signoutModal, setSignoutModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [isSignIn, setIsSignIn] = useState(false)

    const loadJSON = key => key && JSON.parse(localStorage.getItem(key))
    const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

    const showSigninModal = (async) => {
        setSigninModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }
    const hideSigninModal = (async) => {
        setSigninModal(false)
        setScroll(false)
    }
    const showSignupModal = (async) => {
        setSignupModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }
    const hideSignupModal = (async) => {
        setSignupModal(false)
        setScroll(false)
    }
    const switchModal = (async) => {
        setSigninModal(false)
        setSignupModal(true)
    }
    const checkSignOut = () => {
        setSignoutModal(true)
        setScroll(true)
    }
    const cancelSignOut = () => {
        setSignoutModal(false)
        setScroll(false)
    }
    const signOut = () => {
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_nickname')
        localStorage.removeItem('favorite_list')
        setIsSignIn(false)
        setSignoutModal(false)
        setScroll(false)
    }
    
    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    useEffect(() => {
        const id = loadJSON('user_id')
        if (!id) {
            setIsSignIn(false)
        } else {
            setIsSignIn(true)
        }
    })

    return (
        <>
            <SubHeaderWrapper className='hcenter'>
                {!isSignIn ? <SignButton onClick={() => showSigninModal()} $right='150px'>로그인</SignButton> : null}
                {!isSignIn ? <SignButton onClick={() => showSignupModal()} $right='70px'>회원가입</SignButton> : null}
                {isSignIn ? <SignButton onClick={() => checkSignOut()} $right='70px'>로그아웃</SignButton> : null}
            </SubHeaderWrapper>
            {signinModal ? <ModalSignIn hideSigninModal={hideSigninModal} switchModal={switchModal} /> : null}
            {signupModal ? <ModalSignUp hideSignupModal={hideSignupModal} /> : null}
            {signoutModal ? <ModalConfirm msg={'로그아웃 할까요?'} cancel={cancelSignOut} confirm={signOut} /> : null}
        </>
    )
}

export default SubHeader
