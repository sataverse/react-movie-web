import styled from 'styled-components'
import Tab from '../Molecules/Tab'
import MainHeader from '../Organisms/MainHeader'
import MainSection from '../Organisms/MainSection'
import ContentGrid from '../Organisms/ContentGrid'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import Footer from '../Organisms/Footer'
import { useState, useRef } from 'react'
import { useEffect } from 'react'

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
    const [type, setType] = useState(null)
    const [userName, setUserName] = useState('홍길동')
    const [tabType, setTabType] = useState(1) // 1 = 좋아요, 2 = 평가함
    const twoGridWrapper = useRef(null)

    const showModal = async (id, type) => {
        setId(id)
        setType(type)
        setModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }

    const hideModal = (async) => {
        setModal(false)
        setScroll(false)
    }

    async function changeTab(num) {
        setTabType(num)
        if (num == 1) {
            console.log('1')
            twoGridWrapper.current.scrollBy({ left: -1280, behavior: 'smooth' })
        } else if (num == 2) {
            console.log('2')
            twoGridWrapper.current.scrollBy({ left: 1280, behavior: 'smooth' })
        }
    }

    return (
        <>
            <MainHeader />
            {likedListData.length == 0 ? null : <MainSection data={likedListData} />}
            <UserPageTemplateWrapper className='fc fleft'>
                <Tab tabType={tabType} changeTab={changeTab} />
                <TwoGrid ref={twoGridWrapper} className='fr'>
                    <div>
                        <ContentGrid data={likedListData} showModal={showModal} noScroll={noScroll} />
                    </div>
                    <div>
                        <ContentGrid data={ratedListData} showModal={showModal} noScroll={noScroll} />
                    </div>
                </TwoGrid>
            </UserPageTemplateWrapper>
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} type={type}/> : null}
            <Footer />
        </>
    )
}

export default UserPageTemplate
