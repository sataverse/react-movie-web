import styled from 'styled-components'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import MainHeader from '../Organisms/MainHeader'
import SubHeader from '../Organisms/SubHeader'
import MainSection from '../Organisms/MainSection'
import ContentGrid from '../Organisms/ContentGrid'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import { useState } from 'react'

const UserPageTemplateWrapper = styled.div`
    position: relative;
    width: 1280rem;
    left: 50%;
    transform: translateX(-50%);
`

function UserPageTemplate({ likedListData }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)
    const [userName, setUserName] = useState('홍길동')

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

    return (
        <>
            <SubHeader />
            <MainHeader />
            <MainSection />
            <UserPageTemplateWrapper className='fc fleft'>
                <ContentSlideSectionTitle text={`👍 ${userName}님이 좋아하는 영화`} margin={0} />
                <ContentGrid data={likedListData} showModal={showModal} noScroll={noScroll} />
            </UserPageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} /> : null}
        </>
    )
}

export default UserPageTemplate
