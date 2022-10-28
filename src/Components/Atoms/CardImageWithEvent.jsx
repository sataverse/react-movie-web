import styled from 'styled-components'

const CardImageImg1 = styled.img `
    width: 180rem;
    height: 270rem;
    transition: all 0.3s;
    border-radius: 6rem;
    &:hover {
        transform: scale(1.05);
    }
`;

const CardImageImg2 = styled.img `
    border-radius: 6rem;
    width: 400rem;
    height: 270rem;
    object-fit: cover;
`

const CardImageImg1Wrapper = styled.div `
    z-index: 500;
    opacity: 1;
`

const CardImageImg2Wrapper = styled.div `
    position: absolute;
    top: 0rem;
    left: 0rem;
    opacity: 0;
    z-index: 499;
    pointer-events: none;
`

const CardImageWrapper = styled.div `
    width: 180rem;
    height: 270rem;
    border-radius: 6rem;
    overflow: hidden;

    transition: all 0.3s;

    &:hover {
        transition-delay:1s;
        width: 400rem;
    }
    &:hover ${CardImageImg1Wrapper} {
        transition-delay:1s;
        animation: fadeout 0.3s ease 1s forwards;
    }
    &:hover ${CardImageImg2Wrapper} {
        transition-delay:1s;
        animation: fadein 0.3s ease 1s forwards;
        top: 0rem;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

let mouseoverAfterOneSecond;
let makeNormalForLastIndexVar;
let isMakeWideForLastIndexDid = false;

function CardImageWithEvent({posterUrl, bigImageUrl, slideIndex, index, rightOnce, makeWideForLastIndex, makeNormalForLastIndex, datasLength}) {

    return (
        <CardImageWrapper>
            <CardImageImg1Wrapper onMouseOver={()=>{
                if (index - slideIndex == 6) {      // 반응형은 감지 못함 수정하기
                    mouseoverAfterOneSecond = setTimeout(function() {
                        rightOnce();
                    }, 1000);
                    if (datasLength == index){
                        makeNormalForLastIndexVar = setTimeout(function() {
                            makeWideForLastIndex();
                            isMakeWideForLastIndexDid= true;
                        }, 1000);
                    }
                }
            }}
            onMouseLeave={()=>{
                try {
                    clearTimeout(mouseoverAfterOneSecond);
                    clearTimeout(makeNormalForLastIndexVar);
                } catch (error) {
                }
                try {
                    console.log(isMakeWideForLastIndexDid);
                    if (isMakeWideForLastIndexDid == true) {
                        console.log('makeNormalForLastIndex')
                        makeNormalForLastIndex();
                        isMakeWideForLastIndexDid = false;
                    }
                } catch (error) {
                    
                }
            }}
            onClick={makeWideForLastIndex}>
                <CardImageImg1 src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterUrl}`}/>
            </CardImageImg1Wrapper>
            <CardImageImg2Wrapper>
                <CardImageImg2 src={`https://www.themoviedb.org/t/p/original/${bigImageUrl}`}/>
            </CardImageImg2Wrapper>
        </CardImageWrapper>
    )
}

export default CardImageWithEvent
