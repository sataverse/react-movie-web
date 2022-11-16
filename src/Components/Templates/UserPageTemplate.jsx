import styled from 'styled-components'
import Tab from '../Molecules/Tab'
import MainHeader from '../Organisms/MainHeader'
import SubHeader from '../Organisms/SubHeader'
import MainSection from '../Organisms/MainSection'
import ContentGrid from '../Organisms/ContentGrid'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import { useState, useRef } from 'react'

const UserPageTemplateWrapper = styled.div`
    position: relative;
    width: 1280rem;
    left: 50%;
    transform: translateX(-50%);
`

const TwoGrid = styled.div`
    width: 1280rem;
    padding-top: 20rem;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

function UserPageTemplate({ likedListData, ratedListData }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)
    const [userName, setUserName] = useState('홍길동')
    const [tabType, setTabType] = useState(1) // 1 = 좋아요, 2 = 평가함
    const likeTab = useRef(null)
    const rateTab = useRef(null)

    const showModal = async (id) => {
        setModal(true)
        setScroll(true)
        setId(id)
        document.body.style.overflow = 'none'
    }

    const hideModal = (async) => {
        setModal(false)
        setScroll(false)
    }

    async function changeTab(num) {
        setTabType(num)
        if (num == 1) likeTab.current.scrollIntoView({ behavior: 'smooth' })
        else if (num == 2) rateTab.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <SubHeader />
            <MainHeader />
            <MainSection />
            <UserPageTemplateWrapper className='fc fleft'>
                <Tab tabType={tabType} changeTab={changeTab} />
                <TwoGrid className='fr'>
                    <div ref={likeTab}>
                        <ContentGrid data={likedListData} showModal={showModal} noScroll={noScroll} />
                    </div>
                    <div ref={rateTab}>
                        <ContentGrid data={ratedListData} showModal={showModal} noScroll={noScroll} />
                    </div>
                </TwoGrid>
            </UserPageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} /> : null}
        </>
    )
}

export default UserPageTemplate
