import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalMainLogo from '../Atoms/Modal/ModalMainLogo'
import ModalEmailInput from '../Atoms/Modal/ModalEmailInput'
import ModalPasswordInput from '../Atoms/Modal/ModalPasswordInput'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'
import ModalAlert from './ModalAlert'

const ModalSignInBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
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
    overflow-y: scroll;
`

const ModalSignInButton = styled.button`
    position: absolute;
    width: 81%;
    height: 9%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 260px;
    border: 0;
    border-radius: 8px;
    background-color: var(--w-red);
    font-size: 16px;
    color: var(--w-white);

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

const ModalNoAccountMessage = styled.div`
    position: absolute;
    width: 80%;
    height: 8%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 340px;
    font-size: 16px;
    text-align: center;
    color: #959595;
`

const ModalSignUpButton = styled.button`
    position: absolute;
    width: 40%;
    height: 8%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 360px;
    border: 0;
    background-color: transparent;
    font-size: 16px;
    color: var(--w-red);

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

function ModalSignIn({ hideSigninModal, switchModal }) {
    const loadJSON = key => key && JSON.parse(localStorage.getItem(key))
    const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

    const [signinFailedModal, setSigninFailedModal] = React.useState(false)

    const [email, setEmail] = React.useState()
    const [passwd, setPasswd] = React.useState()
    const [userId, setUserId] = React.useState(loadJSON('user_id'))
    const [userNickname, setUserNickname] = React.useState(loadJSON('user_nickname'))

    const hideSigninFailedModal = () => setSigninFailedModal(false)

    async function signin() {
        if (!email || !passwd) return
        await fetch(`http://localhost:8000/v1/sign-in?email=${email}&password=${passwd}`, {method: 'POST'})
            .then(response => response.json())
            .then(data => {
                if (data == -1){
                    setSigninFailedModal(true)
                } else {
                    saveJSON('user_id', data)
                    setUserId(data)
                }
            }
        )
    }

    React.useEffect(() => {
        if (!userId) return
        const id = loadJSON('user_id')
        fetch(`http://localhost:8000/v1/nickname?id=${id}`, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            saveJSON('user_nickname', data)
            setUserNickname(data)
        })
    }, [userId])

    React.useEffect(() => {
        if (!userId) return
        const id = loadJSON('user_id')
        fetch(`http://localhost:8000/v1/favorite?id=${id}`, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            saveJSON('favorite_list', data)
            hideSigninModal()
        })
    }, [userNickname])

    return (
        <>
            <ModalSignInBackground
                onClick={() => hideSigninModal()}>
                <ModalSignInDiv
                    onClick={(event) => event.stopPropagation()}>
                    <ModalMainLogo />
                    <ModalEmailInput type='text' placeholder='이메일' maxLength='50' onChange={e => setEmail(e.target.value)}/>
                    <ModalPasswordInput type='password' placeholder='비밀번호' onChange={e => setPasswd(e.target.value)}/>
                    <ModalSignInButton onClick={() => signin()}>로그인</ModalSignInButton>
                    <ModalNoAccountMessage>회원이 아니신가요?</ModalNoAccountMessage>
                    <ModalSignUpButton onClick={() => switchModal()}>회원가입</ModalSignUpButton>
                    <ModalHorizontalCloseButton  modalSize='middle' hideThisModal={hideSigninModal} />
                </ModalSignInDiv>
            </ModalSignInBackground>
            {signinFailedModal ? <ModalAlert msg={'가입된 이메일이 없거나 비밀번호가 일치하지 않습니다.'} hideThisModal={hideSigninFailedModal} /> : null}
        </>
    )
}

export default ModalSignIn