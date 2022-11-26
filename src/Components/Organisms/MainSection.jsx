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
    background-color: var(--w-background);
`

const MainSectionImgDiv = styled.div`
    width: 100vw;
    height: 300rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-image: url( ${(props) => props.$path} );
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 30%;
    background-size: 100%;
    filter: brightness(40%);
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

function MainSection({ data }) {
    const [path, setPath] = useState()
    const [randomIndex, setRandomIndex] = useState(0)

    useEffect(() => {
        if(data.length == 0) return
        const rand = Math.floor(Math.random() * data.length)
        setRandomIndex(rand)
    }, [data])

    useEffect(() => {
        if(data.length == 0) return
        setPath(data[randomIndex].backdrop_path)
    }, [randomIndex])

    return (
        <MainSectionWrapper className='hcenter'>
            <MainSectionImgDiv $path={`https://www.themoviedb.org/t/p/original/${path}`} />
            <MainSectionManager>
                { JSON.parse(localStorage.getItem('user_email')) != '사용자' ? <MainNavManager /> : null }
            </MainSectionManager>
            <MainSectionUser>
                <MainSectionUserProfile><ProfileIcon width={80} height={80} /></MainSectionUserProfile>
                <MainSectionUserEmail>{JSON.parse(localStorage.getItem('user_email'))}</MainSectionUserEmail>
                <MainSectionUserName>{JSON.parse(localStorage.getItem('user_nickname'))}</MainSectionUserName>
            </MainSectionUser>
        </MainSectionWrapper>
    )
}

export default MainSection
