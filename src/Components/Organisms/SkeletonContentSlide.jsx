import styled from 'styled-components'
import SkeletonContentCard from '../Molecules/SkeletonContentCard'

const SkeletonContentSlideWrapper = styled.div `
    position: relative;
    width: 1280rem;
    height: 340rem;
    z-index: 100000;
    column-gap: 40rem;
`

function SkeletonContentSlide() {
    return (
        <SkeletonContentSlideWrapper className='fr fcenter'>
            <SkeletonContentCard/>
            <SkeletonContentCard/>
            <SkeletonContentCard/>
            <SkeletonContentCard/>
            <SkeletonContentCard/>
            <SkeletonContentCard/>
        </SkeletonContentSlideWrapper>
    )   
}

export default SkeletonContentSlide
