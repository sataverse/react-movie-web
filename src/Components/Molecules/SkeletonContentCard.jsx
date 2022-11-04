import styled from 'styled-components'

const SkeletonAnimation = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
    overflow: hidden;
    border-radius: 4px;

    @keyframes skeleton-gradient {
        0% {
            background-color: #EFEFEF;
        }
        50% {
            background-color: var(--w-graywhite);
        }
        100% {
            background-color: #EFEFEF;
        }
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
    }
`;

const SkeletonContentCardWrapper = styled.div `
    width: 180rem;
    height: 340rem;
    z-index: 100000;
    position: relative;
`;

const SkeletonContentCardImage = styled(SkeletonAnimation) `
    width: 180rem;
    height: 270rem;
    overflow: hidden;
    position: relative;
`;

const SkeletonContentCardText1 = styled(SkeletonAnimation) `
    position: absolute;
    top: 284rem;
    left: 0rem;
    width: 180rem;
    height: 16rem;
`;

const SkeletonContentCardText2 = styled(SkeletonAnimation) `
    position: absolute;
    top: 310rem;
    left: 0rem;
    width: 100rem;
    height: 16rem;
`;

const SkeletonContentCardScore = styled(SkeletonAnimation) `
    position: absolute;
    top: 310rem;
    left: 144rem;
    width: 36rem;
    height: 16rem;
`;

function SkeletonContentCard() {
    return (
        <SkeletonContentCardWrapper>
            <SkeletonContentCardImage/>
            <SkeletonContentCardText1/>
            <SkeletonContentCardText2/>
            <SkeletonContentCardScore/>
        </SkeletonContentCardWrapper>
    )
}

export default SkeletonContentCard
