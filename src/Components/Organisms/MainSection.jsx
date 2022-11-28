import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import ProfileIcon from '../Atoms/Svg/Profile'
import MainNavManager from '../Atoms/MainNavManager'
import UserStore from '../../Modules/UserStore'

const MainSectionWrapper = styled.div`
    width: 100vw;
    height: 400rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: var(--w-gray);
`

const MainSectionImgDiv = styled.img`
    width: 100vw;
    height: 400rem;
    object-fit: cover;
    filter: brightness(40%);
    transition: all 0.3s;
    opacity: 0;
`

const MainSectionBlank = styled.div`
    width: 100vw;
    height: 400rem;
    background-color: var(--w-black);
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
    width: 1280rem;
    bottom: 30rem;
    left: 50%;
    transform: translateX(-50%);
`

const MainSectionUserProfile = styled.div`
    width: 1280rem;
    height: 80rem;
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
    color: var(--w-white);
    font-size: 30rem;
    user-select: none;
`
function rand(len) {
    return Math.floor(Math.random() * len)
}

function MainSection({ data }) {
    const loadingImage = useRef(null)
    return (
        <MainSectionWrapper className='hcenter'>
            {data.length != 0 ? (
                <MainSectionImgDiv
                    ref={loadingImage}
                    src={`https://www.themoviedb.org/t/p/original/${data[0].backdrop_path}`}
                    onLoad={() => (loadingImage.current.style.opacity = 1)}
                />
            ) : (
                <MainSectionBlank />
            )}
            <MainSectionManager>{UserStore.rank == '매니저' ? <MainNavManager /> : null}</MainSectionManager>
            <MainSectionUser>
                <MainSectionUserProfile>
                    <ProfileIcon width={80} height={80} />
                </MainSectionUserProfile>
                <MainSectionUserEmail>{UserStore.email}</MainSectionUserEmail>
                <MainSectionUserName>{UserStore.nickname}</MainSectionUserName>
            </MainSectionUser>
        </MainSectionWrapper>
    )
}

export default MainSection
