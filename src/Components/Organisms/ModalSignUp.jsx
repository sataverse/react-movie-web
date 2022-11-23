import styled, { keyframes } from 'styled-components'
import React, { useState, useEffect } from 'react'
import ModalMainLogo from '../Atoms/Modal/ModalMainLogo'
import ModalHorizontalCloseButton from '../Atoms/Modal/ModalHorizontalCloseButton'
import ModalAlert from './ModalAlert'
import ModalConfirm from './ModalConfirm'
import ModalInput from '../Atoms/Modal/ModalInput'
import ModalSignButton from '../Atoms/Modal/ModalSignButton'

const ModalSignInBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    z-index: 2000;
`

const ModalSignUpDiv = styled.div`
    position: relative;
    width: 300rem;
    height: 500rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--w-background);
    border-radius: 10rem;
    animation: fadeInForModalSignUpDiv 0.3s linear;

    @keyframes fadeInForModalSignUpDiv {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

function ModalSignUp({ hideSignupModal }) {
    const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
    const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

    const [email, setEmail] = React.useState()
    const [passwd, setPasswd] = React.useState()
    const [nickname, setNickname] = React.useState()
    const [userId, setUserId] = React.useState()
    const [userFavorite, setUserFavorite] = React.useState(loadJSON('favorite_list'))
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
        await fetch(`http://localhost:8000/v1/check?email=${email}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data == -1) setAlertSignUpFailedModal(true)
                else setConfirmSignUpModal(true)
            })
    }

    function signup() {
        fetch(`http://localhost:8000/v1/sign-up?email=${email}&password=${passwd}&nickname=${nickname}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data == 1) signin()
            })
            .catch((err) => console.error(err))
    }

    function signin() {
        setConfirmSignUpModal(false)
        fetch(`http://localhost:8000/v1/sign-in?email=${email}&password=${passwd}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data.Id == -1) return
                saveJSON('user_id', data.Id)
                saveJSON('user_email', data.Email)
                saveJSON('user_nickname', data.Nickname)
                saveJSON('rank', data.Rank)
                setUserId(data.Id)
            })
    }

    React.useEffect(() => {
        if (!userId) return
        const id = loadJSON('user_id')
        fetch(`http://localhost:8000/v1/favorite?id=${id}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                saveJSON('favorite_list', data)
                if (!data) setUserFavorite([])
                else setUserFavorite(data)
            })
    }, [userId])

    React.useEffect(() => {
        if (!userId) return
        const id = loadJSON('user_id')
        fetch(`http://localhost:8000/v1/rating-list?id=${id}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                saveJSON('rating_list', data)
                hideSignupModal()
            })
    }, [userFavorite])

    return (
        <>
            <ModalSignInBackground onClick={() => hideSignupModal()}>
                <ModalSignUpDiv className='fc fleft' onClick={(event) => event.stopPropagation()}>
                    <ModalMainLogo className='fr fcenter' style={{ height: '140rem' }} />
                    <ModalInput type='text' placeholder='이메일' maxLength='50' onChange={(e) => setEmail(e.target.value)} className='hcenter' />
                    <ModalInput type='password' placeholder='비밀번호' onChange={(e) => setPasswd(e.target.value)} className='hcenter' />
                    <ModalInput type='text' placeholder='닉네임' maxLength='20' onChange={(e) => setNickname(e.target.value)} className='hcenter' />
                    <ModalSignButton onClick={() => check()} className='hcenter'>
                        가입
                    </ModalSignButton>
                    <ModalHorizontalCloseButton modalSize='middle' hideThisModal={hideSignupModal} />
                </ModalSignUpDiv>
            </ModalSignInBackground>
            {alertDidNotInputModal ? <ModalAlert msg={'모든 정보를 입력해주세요.'} hideThisModal={hideAlertDidNotInputModal} /> : null}
            {alertSignUpFailedModal ? <ModalAlert msg={'현재 이메일로 가입할 수 없습니다.'} hideThisModal={hideAlertSignUpFailedModal} /> : null}
            {confirmSignUpModal ? <ModalConfirm msg={'현재 정보로 가입하시겠습니까?'} cancel={hideConfirmSignUpModal} confirm={signup} /> : null}
        </>
    )
}

export default ModalSignUp
