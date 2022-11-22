import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import { useState, useEffect } from 'react'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ContentGrid from '../Organisms/ContentGrid'

const PersonPageTemplateWrapper = styled.div`
    width: 100vw;
`

function PersonPageTemplate({ data }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)

    const showModal = async () => {}

    return (
        <>
            <MainHeader />
            <PersonPageTemplateWrapper className='fc fleft'>
                <div style={{ width: '1280rem' }} className='hcenter'>
                    <ContentSlideSectionTitle text={'😎 인물'} margin={0} />
                    <ContentGrid data={data} type={'movie'} showModal={showModal} noScroll={noScroll} />
                </div>
            </PersonPageTemplateWrapper>
        </>
    )
}

export default PersonPageTemplate
