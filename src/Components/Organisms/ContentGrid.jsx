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

function ContentGrid({ data, showModal, type }) {
    return (
        <ContentGridDiv className='hcenter'>
            {data != undefined &&
                data.map((element, index) => {
                    if (type == 'movie') {
                        let year1 = element.release_date
                        let year2 = year1?.slice(0, 4)
                        let desc = `${year2}`
                        try {
                            let fc = findCountry(element.production_countries[0].iso_3166_1)
                            if (fc != '') desc += ` · ${fc}`
                        } catch (error) {}
                        return (
                            <ContentCard
                                key={`grid-content-${type}-${element.id}`}
                                id={element.id}
                                title={element.title}
                                desc={desc}
                                score={parseInt(element.vote_average * 10)}
                                posterUrl={element.poster_path}
                                index={index}
                                type={type}
                                showModal={showModal}
                            />
                        )
                    } else if (type == 'tv') {
                        let year1 = element.first_air_date
                        let year2 = year1?.slice(0, 4)
                        let desc = `${year2}`
                        try {
                            let fc = findCountry(element.origin_country[0])
                            if (fc != '') desc += ` · ${fc}`
                        } catch (error) {}
                        return (
                            <ContentCard
                                key={`grid-content-${type}-${element.id}`}
                                id={element.id}
                                title={element.name}
                                desc={desc}
                                score={parseInt(element.vote_average * 10)}
                                posterUrl={element.poster_path}
                                index={index}
                                type={type}
                                showModal={showModal}
                            />
                        )
                    }
                })}
        </ContentGridDiv>
    )
}

export default ContentGrid
