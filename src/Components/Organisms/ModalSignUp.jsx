import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalMainLogo from '../Atoms/Modal/ModalMainLogo'
import ModalEmailInput from '../Atoms/Modal/ModalEmailInput'
import ModalPasswordInput from '../Atoms/Modal/ModalPasswordInput'
import ModalNicknameInput from '../Atoms/Modal/ModalNicknameInput'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'
import ModalAlert from './ModalAlert'
import ModalConfirm from './ModalConfirm'

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

const ModalSignUpButton = styled.button`
    position: absolute;
    width: 81%;
    height: 9%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 320px;
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

function ModalSignUp({ hideSignupModal }) {
    const loadJSON = key => key && JSON.parse(localStorage.getItem(key))
    const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

    const [email, setEmail] = React.useState()
    const [passwd, setPasswd] = React.useState()
    const [nickname, setNickname] = React.useState()
    const [userId, setUserId] = React.useState()
    const [userNickname, setUserNickname] = React.useState()
    const [alertDidNotInputModal, setAlertDidNotInputModal] = useState(false)
    const [alertSignUpFailedModal, setAlertSignUpFailedModal] = useState(false)
    const [confirmSignUpModal, setConfirmSignUpModal] = useState(false)

    const hideAlertDidNotInputModal = () => setAlertDidNotInputModal(false)
    const hideAlertSignUpFailedModal = () => setAlertSignUpFailedModal(false)
    const hideConfirmSignUpModal = () => setConfirmSignUpModal(false)

    async function check() {
        if (!email || !passwd || !nickname) {
            setAlertDidNotInputModal(true)
            return
        }
        await fetch(`http://localhost:8000/v1/check?email=${email}`, {method: 'POST'})
        .then(response => response.json())
        .then(data => {
            if(data == -1) setAlertSignUpFailedModal(true)
            else setConfirmSignUpModal(true)
        })
    }

    function signup() { 
        fetch(`http://localhost:8000/v1/sign-up?email=${email}&password=${passwd}&nickname=${nickname}`, {method: 'POST'})
        .then(response => response.json())
        .then(data => {
            if (data == 1) signin()
        })
        .catch(err => console.error(err))
    }

    function signin() {
        setConfirmSignUpModal(false)
        fetch(`http://localhost:8000/v1/sign-in?email=${email}&password=${passwd}`, {method: 'POST'})
        .then(response => response.json())
        .then(data => {
            if (data == -1) return
            saveJSON('user_id', data)
            setUserId(data)
        })
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
            hideSignupModal()
        })
    }, [userNickname])

    return (
        <>
            <ModalSignInBackground
                onClick={() => hideSignupModal()}>
                <ModalSignInDiv
                    onClick={(event) => event.stopPropagation()}>
                    <ModalMainLogo />
                    <ModalEmailInput type='text' placeholder=' 이메일' maxLength='50' onChange={e => setEmail(e.target.value)} />
                    <ModalPasswordInput type='password' placeholder=' 비밀번호' onChange={e => setPasswd(e.target.value)} />
                    <ModalNicknameInput type='text' placeholder=' 닉네임' maxLength='20' onChange={e => setNickname(e.target.value)} />
                    <ModalSignUpButton onClick={() => check()}>가입</ModalSignUpButton>
                    <ModalHorizontalCloseButton  modalSize='middle' hideThisModal={hideSignupModal} />
                </ModalSignInDiv>
            </ModalSignInBackground>
            {alertDidNotInputModal ? <ModalAlert msg={'모든 정보를 입력해주세요.'} hideThisModal={hideAlertDidNotInputModal} />: null}
            {alertSignUpFailedModal ? <ModalAlert msg={'현재 이메일로 가입할 수 없습니다.'} hideThisModal={hideAlertSignUpFailedModal} />: null}
            {confirmSignUpModal ? <ModalConfirm msg={'현재 정보로 가입하시겠습니까?'} cancel={hideConfirmSignUpModal} confirm={signup}/>: null}
        </>
    )
}

export default ModalSignUp