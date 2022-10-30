import styled from 'styled-components'

const ContentSlideSectionTitleSpan = styled.span `
    height: 70rem;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24rem;
    line-height: 70rem;
    margin-left: 50rem;
    color: var(--w-black);
`

function ContentSlideSectionTitle({text}) {
    return (
        <ContentSlideSectionTitleSpan>
            {text}
        </ContentSlideSectionTitleSpan>
    )
}

export default ContentSlideSectionTitle