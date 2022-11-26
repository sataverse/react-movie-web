import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProfileIcon from '../Atoms/Svg/Profile'
import MainNavManager from '../Atoms/MainNavManager'

const MainSectionWrapper = styled.div`
    width: 100vw;
    height: 300rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: var(--w-gray);
`

const MainSectionManager = styled.div`
    position: absolute;
    width: 40rem;
    height: 40rem;
    right: 200rem;
    top: 20rem;
`

const MainSectionUser = styled.div`
    position: absolute;
    width: 400rem;
    height: 80rem;
    left: 200rem;
    bottom: 20rem;
`

const MainSectionUserProfile = styled.div`
    position: absolute;
    width: 80rem;
    height: 80rem;
    border-radius: 80rem;
`

const MainSectionUserEmail = styled.div`
    position: absolute;
    width: 250rem;
    height: 20rem;
    left: 100rem;
    top: 5rem;
    color: var(--w-background);
    font-size: 15rem;
    user-select: none;
`

const MainSectionUserName = styled.div`
    position: absolute;
    width: 250rem;
    height: 40rem;
    left: 100rem;
    top: 30rem;
    color: var(--w-background);
    font-size: 30rem;
    user-select: none;
`

function MainSectionEmpty() {
    return (
        <MainSectionWrapper className='hcenter'>
            <MainSectionManager>
                { JSON.parse(localStorage.getItem('rank')) != '회원' ? <MainNavManager /> : null }
            </MainSectionManager>
            <MainSectionUser>
                <MainSectionUserProfile><ProfileIcon width={80} height={80} /></MainSectionUserProfile>
                <MainSectionUserEmail>{JSON.parse(localStorage.getItem('user_email'))}</MainSectionUserEmail>
                <MainSectionUserName>{JSON.parse(localStorage.getItem('user_nickname'))}</MainSectionUserName>
            </MainSectionUser>
        </MainSectionWrapper>
    )
}

export default MainSectionEmpty
