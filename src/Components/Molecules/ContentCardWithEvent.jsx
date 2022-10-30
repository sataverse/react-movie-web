import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CardImageWithEvent from '../Atoms/CardImageWithEvent';
import CardTextTitle from '../Atoms/CardTextTitle';
import CardTextDesc from '../Atoms/CardTextDesc';
import CardTextScore from '../Atoms/CardTextScore';
import CardIndex from '../Atoms/CardIndex';


const ContentCardDiv = styled.div `
    position: relative;
    height: 340rem;
    background-color: var(--w-background);
    cursor: pointer;
`;
const Wrapper1 = styled.div `
    height: 70rem;
`

function ContentCardWithEvent({id, title, desc, score, posterUrl, bigImageUrl, slideIndex, index, rightOnce, makeWideForLastIndex,  makeNormalForLastIndex, datasLength, overview, type}) {
    return (
        <Link to={`/${type}/${id}`} className='no-underline'>
            <ContentCardDiv className='fc'>
                <CardIndex index={index}/>
                <CardImageWithEvent posterUrl={posterUrl} bigImageUrl={bigImageUrl} slideIndex={slideIndex} index={index} rightOnce={rightOnce}
                    makeWideForLastIndex={makeWideForLastIndex} makeNormalForLastIndex={makeNormalForLastIndex}
                    datasLength={datasLength} overview={overview}/>
                <Wrapper1 className='fc fsevenly'>
                    <CardTextTitle text={title}/>
                    <div className='fr fsbetween'>
                        <CardTextDesc text={desc}/>
                        <CardTextScore text={score}/>
                    </div>
                </Wrapper1>
            </ContentCardDiv>
        </Link>
    )
}

export default ContentCardWithEvent
