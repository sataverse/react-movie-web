import styled from 'styled-components'
import MovieSlideSection from '../Organisms/ContentSlideSection';
import MainHeader from '../Organisms/MainHeader';
import SubHeader from '../Organisms/SubHeader';


const MainPageTemplateWrapper = styled.div `
    width: 100vw;
`;

function MainPageTemplate({trendMovies, trendTvs, gbsPick}) {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <MainPageTemplateWrapper className='fc fleft'>
                <div className='fr fcenter'>
                    <MovieSlideSection sectionTitle={'🍿 인기 영화'} datas={trendMovies} type="movie"></MovieSlideSection>
                </div>
                <div className='fr fcenter'>
                    <MovieSlideSection sectionTitle={'📺 인기 TV 프로그램'} datas={trendTvs} type="tv"></MovieSlideSection>
                </div>
                <div className='fr fcenter'>
                    <MovieSlideSection sectionTitle={'내가 최근에 본거임'} datas={gbsPick} type="movie"></MovieSlideSection>
                </div>
            </MainPageTemplateWrapper>
        </>
    )
}

export default MainPageTemplate
