import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
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

function ModalSignUp({ hideSignupModal, setGlobalLoginStatus }) {
    const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
    const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

    const [email, setEmail] = useState()
    const [passwd, setPasswd] = useState()
    const [nickname, setNickname] = useState()
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
        await fetch(`http://13.209.26.226/v1/check?email=${email}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data == -1) setAlertSignUpFailedModal(true)
                else setConfirmSignUpModal(true)
            })
    }

    function signup() {
        fetch(`http://13.209.26.226/v1/sign-up?email=${email}&password=${passwd}&nickname=${nickname}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data == 1) signin()
            })
            .catch((err) => console.error(err))
    }

    function signin() {
        setConfirmSignUpModal(false)
        fetch(`http://13.209.26.226/v1/sign-in?email=${email}&password=${passwd}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data.Id == -1) return
                setGlobalLoginStatus(true)
                UserStore.userId = data.Id
                UserStore.nickname = data.Nickname
                UserStore.email = data.Email
                UserStore.rank = data.Rank
            })
    }

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
