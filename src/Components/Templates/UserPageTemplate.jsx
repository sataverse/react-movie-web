import styled from 'styled-components'
import MovieSlideSection from '../Organisms/ContentSlideSection';
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';

import MainSection from '../Organisms/MainSection';


const UserPageTemplateWrapper = styled.div `
    width: 100vw;
`;

function UserPageTemplate({trendMovies, trendTvs, gbsPick}) {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <MainSection/>
            <UserPageTemplateWrapper className='fc fleft'>
            <MainSection/>
                <div className='fr fcenter'>
                    <MovieSlideSection sectionTitle={'👍 곽범석님이 좋아하는 컨텐츠'} datas={gbsPick} type="movie"></MovieSlideSection>
                </div>
            </UserPageTemplateWrapper>
        </>
    )
}

export default UserPageTemplate
