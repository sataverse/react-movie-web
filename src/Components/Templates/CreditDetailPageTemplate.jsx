import styled from 'styled-components'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import MainHeader from '../Organisms/MainHeader'

const CreditDetailPageTemplateWrapper = styled.div`
    width: 100vw;
`

function CreditDetailPageTemplate({ data }) {
    return (
        <>
            <MainHeader />
            <CreditDetailPageTemplateWrapper>
                <div style={{ width: '1280rem' }} className='hcenter'>
                    <ContentSlideSectionTitle text={data.name} margin={0} />
                </div>
            </CreditDetailPageTemplateWrapper>
        </>
    )
}

export default CreditDetailPageTemplate
