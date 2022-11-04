import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardImageWithEvent from '../Atoms/Card/CardImageWithEvent';
import CardTextTitle from '../Atoms/Card/CardTextTitle';
import CardTextDesc from '../Atoms/Card/CardTextDesc';
import CardTextScore from '../Atoms/Card/CardTextScore';
import CardIndex from '../Atoms/Card/CardIndex';


const ContentCardDiv = styled.div `
    position: relative;
    height: 340rem;
    background-color: var(--w-background);
    cursor: pointer;
`;

const Wrapper1 = styled.div `
    height: 70rem;
`

function ContentCardWithEvent({id, title, desc, score, posterUrl, bigImageUrl, slideIndex, index, rightOnce, makeWideForLastIndex,  makeNormalForLastIndex, datasLength, overview, type, isImageLoaded}) {

    return (
        <Link to={`/${type}/${id}`} className='no-underline no-drag'>
            <ContentCardDiv className='fc no-drag' >
                <CardIndex index={index}/>
                <CardImageWithEvent posterUrl={posterUrl} bigImageUrl={bigImageUrl} slideIndex={slideIndex} index={index} rightOnce={rightOnce}
                    makeWideForLastIndex={makeWideForLastIndex} makeNormalForLastIndex={makeNormalForLastIndex}
                    datasLength={datasLength} overview={overview} className='no-drag' isImageLoaded={isImageLoaded}/>
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
