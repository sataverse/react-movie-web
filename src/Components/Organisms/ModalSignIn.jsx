import styled, { keyframes } from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalMainLogo from '../Atoms/Modal/ModalMainLogo'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'
import ModalAlert from './ModalAlert'
import ModalInput from '../Atoms/Modal/ModalInput'
import ModalSignButton from '../Atoms/Modal/ModalSignButton'
import UserStore from '../../Modules/UserStore'

const ModalSignInBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const ModalSignInDiv = styled.div`
    position: relative;
    width: 300rem;
    height: 500rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    animation: ${fadeIn} 0.3s linear;
`

const ModalNoAccountMessage = styled.div`
    font-size: 14rem;
    text-align: center;
    color: #959595;
`

const ModalSignUpButton = styled.div`
    text-align: center;
    font-size: 16rem;
    font-weight: 500;
    color: var(--w-red);
    cursor: pointer;
`

function ModalSignIn({ hideSigninModal, switchModal, setGlobalLoginStatus }) {
    const [signinFailedModal, setSigninFailedModal] = useState(null)
    const [email, setEmail] = useState()
    const [passwd, setPasswd] = useState()
    const hideSigninFailedModal = () => setSigninFailedModal(false)

    function signin() {
        if (!email || !passwd) return
        async function getUserInfo() {
            await fetch(`http://13.209.26.226/v1/sign-in?email=${email}&password=${passwd}`, { method: 'POST' })
                .then((response) => response.json())
                .then((data) => {
                    if (data.Id == -1) {
                        setSignInStatus(false)
                        setSigninFailedModal(true)
                    } else {
                        UserStore.userId = data.Id
                        UserStore.nickname = data.Email
                        UserStore.email = data.Nickname
                        UserStore.rank = data.Rank
                    }
                })
        }
        async function getUserFavorite() {
            await fetch(`http://13.209.26.226/v1/favorite?id=${UserStore.userId}`, { method: 'GET' })
                .then((response) => response.json())
                .then((data) => {
                    if (data != undefined) UserStore.setFavorites(data)
                })
        }
        async function getUserRate() {
            await fetch(`http://13.209.26.226/v1/rating-list?user_id=${UserStore.userId}`, { method: 'GET' })
                .then((response) => response.json())
                .then((data) => {
                    if (data != undefined) UserStore.setStars(data)
                    setGlobalLoginStatus(true)
                })
        }

        async function getInfo() {
            await getUserInfo()
            await getUserFavorite()
            await getUserRate()
            hideSigninModal()
        }

        getInfo()
    }

    return (
        <>
            <ModalSignInBackground onClick={() => hideSigninModal()}>
                <ModalSignInDiv className='fc fleft' onClick={(event) => event.stopPropagation()}>
                    <ModalMainLogo className='fr fcenter' style={{ height: '140rem' }} />
                    <ModalInput type='text' placeholder='이메일' maxLength='50' onChange={(e) => setEmail(e.target.value)} className='hcenter' />
                    <ModalInput type='password' placeholder='비밀번호' onChange={(e) => setPasswd(e.target.value)} className='hcenter' />
                    <ModalSignButton
                        onClick={() => {
                            signin()
                        }}
                        className='hcenter'>
                        로그인
                    </ModalSignButton>
                    <div className='fc fsevenly' style={{ height: '70rem', margin: '12rem' }}>
                        <ModalNoAccountMessage>회원이 아니신가요?</ModalNoAccountMessage>
                        <ModalSignUpButton className='hcenter' onClick={() => switchModal()}>
                            회원가입
                        </ModalSignUpButton>
                    </div>
                    <ModalHorizontalCloseButton modalSize='middle' hideThisModal={hideSigninModal} />
                </ModalSignInDiv>
            </ModalSignInBackground>
            {signinFailedModal ? (
                <ModalAlert msg={'가입된 이메일이 없거나 비밀번호가 일치하지 않습니다.'} hideThisModal={hideSigninFailedModal} />
            ) : null}
        </>
    )
}

export default ModalSignIn
