import styled from 'styled-components'

const ContentSlideSectionTitleSpan = styled.span`
    height: 70rem;
    font-weight: 700;
    font-size: 24rem;
    line-height: 70rem;
    color: var(--w-black);
    margin-left: ${(props) => `${props.$margin}rem`};
`

function ContentSlideSectionTitle({ text, margin = 50 }) {
    return <ContentSlideSectionTitleSpan $margin={margin}>{text}</ContentSlideSectionTitleSpan>
}

export default ContentSlideSectionTitle
