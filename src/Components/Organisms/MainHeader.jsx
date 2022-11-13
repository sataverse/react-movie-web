import styled from 'styled-components'
import MainNavLogo from '../Atoms/MainNavLogo'
import MainHeaderNav from '../Molecules/MainHeaderNav'
import SearchForm from '../Molecules/SearchForm'
import MainNavUser from '../Atoms/MainNavUser'
import ModalSignIn from '../Organisms/ModalSignIn'
import ModalSignUp from '../Organisms/ModalSignUp'
import ModalConfirm from './ModalConfirm'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MainHeaderWrapper = styled.div`
    position: sticky;
    top: -1px;
    width: 100vw;
    height: 65rem;
    z-index: 1000;
    background-color: ${(props) => {
        if (props.$backgroundColor == 'auto') return 'var(--w-background)'
        else if (props.$backgroundColor == 'transparent') return 'transparent'
    }};
`

const MainNavWrapper = styled.div`
    width: 400rem;
    height: 100%;
    padding-right: 100rem;
`

const MainHeaderContentWrapper = styled.div`
    position: relative;
    height: 64rem;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 575px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 576px) and (max-width: 767px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 992px) and (max-width: 1279px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 1280px) and (max-width: 1439px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 1380px) {
        & {
            width: 1280rem;
        }
    }
`

const MainNavUserWrapper = styled.div`
    width: 400rem;
    height: 100%;
    margin-right: 44rem;
`

const MainHeaderHr = styled.div`
    width: 1440rem;
    height: 1rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => {
        if (props.$backgroundColor == 'auto') return 'var(--w-graywhite)'
        else if (props.$backgroundColor == 'transparent') return 'var(--w-white)'
    }};
`

const SignButton = styled.button`
    position: relative;
    width: 80rem;
    height: 16rem;
    top: 3rem;
    right: ${(props) => props.$right};
    border: 0;
    background-color: transparent;
    font-size: 16px;
    color: var(--w-red);

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

function MainHeader({ backgroundColor = 'auto' }) {
    const navigate = useNavigate();

    const [signinModal, setSigninModal] = useState(false)
    const [signupModal, setSignupModal] = useState(false)
    const [signoutModal, setSignoutModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [isSignIn, setIsSignIn] = useState(false)

    const loadJSON = key => key && JSON.parse(localStorage.getItem(key))

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
        navigate('/')
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
            <MainHeaderWrapper className='fc fsbetween' $backgroundColor={backgroundColor}>
                <MainHeaderContentWrapper className='fr fsbetween'>
                    <MainNavWrapper className='fr fsbetween'>
                        <div className='fc fcenter'>
                            <MainNavLogo />
                        </div>
                        <div className='fc fcenter'>
                            <MainHeaderNav backgroundColor={backgroundColor} />
                        </div>
                    </MainNavWrapper>
                    <MainNavUserWrapper className='fr fsbetween'>
                        <div className='fc fcenter'>
                            <SearchForm backgroundColor={backgroundColor} />
                        </div>
                        <div className='fc fcenter'>
                            {!isSignIn ? <SignButton onClick={() => showSigninModal()} $right='100px'>로그인</SignButton> : null}
                            {!isSignIn ? <SignButton onClick={() => showSignupModal()} $right='10px'>회원가입</SignButton> : null}
                            {isSignIn ? <SignButton onClick={() => checkSignOut()} $right='100px'>로그아웃</SignButton> : null}
                            {isSignIn ? <MainNavUser /> : null}
                        </div>
                    </MainNavUserWrapper>
                </MainHeaderContentWrapper>
                <MainHeaderHr $backgroundColor={backgroundColor} />
            </MainHeaderWrapper>
            {signinModal ? <ModalSignIn hideSigninModal={hideSigninModal} switchModal={switchModal} /> : null}
            {signupModal ? <ModalSignUp hideSignupModal={hideSignupModal} /> : null}
            {signoutModal ? <ModalConfirm msg={'로그아웃 할까요?'} cancel={cancelSignOut} confirm={signOut} /> : null}
        </>
    )
}

export default MainHeader
