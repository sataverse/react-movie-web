import styled from 'styled-components'
import ContentCard from '../Molecules/ContentCard'
import { findCountry } from '../../Modules/utils'

const ContentGridDiv = styled.div`
    position: relative;
    display: grid;
    width: 1280rem;
    grid-template-columns: repeat(6, 1fr);
    left: 50%;
    transform: translateX(-50%);
    row-gap: 30rem;
    column-gap: 40rem;
`

function ContentGrid({ data }) {
    if (data != undefined) {
        return (
            <ContentGridDiv>
                {data.map((element, index) => {
                    let year1 = element.release_date || ''
                    let year2 = year1?.slice(0, 4)
                    let desc = `${year2}`
                    let country
                    try {
                        country = element.production_countries[0].iso_3166_1
                        desc += findCountry(country)
                    } catch (error) {}
                    return (
                        <ContentCard
                            id={element.id}
                            title={element.title}
                            desc={desc}
                            score={element.vote_average * 10}
                            posterUrl={element.poster_path}
                            index={index}
                            type={'movie'}
                        />
                    )
                })}
            </ContentGridDiv>
        )
    }
}

export default ContentGrid
