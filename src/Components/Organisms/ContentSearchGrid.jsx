import styled from 'styled-components'
import SearchCard from '../Molecules/SearchCard'
import { findCountry } from '../../Modules/utils'

const ContentSearchGridDiv = styled.div`
    position: relative;
    display: grid;
    width: 100vw;
    grid-template-columns: repeat(1, 1fr);
    top: 82rem;
    row-gap: 20rem;
    margin-bottom: 20rem;
`

function ContentSearchGrid({ data, showModal, type }) {
    if (data != undefined) {
        return (
            <ContentSearchGridDiv>
                {data.map((element) => {
                    let rate1 = element.vote_average || ''
                    let rate2 = Math.floor(rate1 * 10)
                    if (type == 'movie') {
                        let year1 = element.release_date || ''
                        let year2 = year1?.slice(0, 4)
                        let desc = `${year2}`
                        let country
                        try {
                            country = element.production_countries[0].iso_3166_1
                            desc += findCountry(country)
                        } catch (error) { }
                        return (
                            <SearchCard
                                key={`search-grid-content-${element.id}`}
                                id={element.id}
                                title={element.title}
                                desc={desc}
                                overview={element.overview}
                                score={`${rate2}`}
                                posterUrl={element.poster_path}
                                type={type}
                                showModal={showModal}
                            />
                        )
                    }
                    else if(type == 'tv') {
                        let year1 = element.first_air_date || ''
                        let year2 = year1?.slice(0, 4)
                        let desc = `${year2}`
                        try {
                            desc += ` . ${findCountry(element.origin_country[0])}`
                        } catch(error) {}
                        return (
                            <SearchCard
                                key={`search-grid-content-${element.id}`}
                                id={element.id}
                                title={element.name}
                                desc={desc}
                                overview={element.overview}
                                score={`${rate2}`}
                                posterUrl={element.poster_path}
                                type={type}
                                showModal={showModal}
                            />
                        )                
                    }
                    else if(type == 'person') {

                        return (
                            <SearchCard
                                key={`search-grid-content-${element.id}`}
                                id={element.id}
                                title={element.name}
                                desc={element.place_of_birth}
                                overview={element.biography}
                                posterUrl={element.profile_path}
                                type={type}
                                showModal={showModal}
                            />
                        )
                    }
                })}
            </ContentSearchGridDiv>
        )
    }
}

export default ContentSearchGrid
