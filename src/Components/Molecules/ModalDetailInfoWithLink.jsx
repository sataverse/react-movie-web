import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ModalDetailInfoWrapper = styled.div`
    width: fit-content;
    height: 60rem;
    margin-left: 10rem;
    margin-right: 10rem;
`

const ModalDetailInfoText1 = styled.div`
    font-weight: 400;
    font-size: 14rem;
    line-height: 22rem;
    color: #777777;
`

const GenreTag = styled.div`
    font-weight: 400;
    font-size: 14rem;
    line-height: 22rem;
    color: var(--w-black);
    margin-right: 10rem;
    cursor: pointer;
`

function translateGenre(text) {
    switch (text) {
        case 'Action & Adventure':
            return '액션 & 어드벤처'
            break
        case 'Kids':
            return '어린이'
            break
        case 'News':
            return '뉴스'
            break
        case 'Reality':
            return '리얼리티'
            break
        case 'Sci-Fi & Fantasy':
            return 'SF & 판타지'
            break
        case 'Soap':
            return '연속극'
            break
        case 'Talk':
            return '토크쇼'
            break
        case 'War & Politics':
            return '전쟁 & 정치'
            break
        default:
            return text
            break
    }
}

function ModalDetailInfoWithLink({ text1, genres, hideModal, type }) {
    const navigate = useNavigate()
    return (
        <ModalDetailInfoWrapper className='fc fsevenly'>
            <div>
                {genres.length != 0 && <ModalDetailInfoText1>{text1}</ModalDetailInfoText1>}
                <div className='fr'>
                    {genres != undefined &&
                        genres.map((element) => {
                            return (
                                <GenreTag
                                    key={`detail-content-genre-tag-${element.id}`}
                                    onClick={() => {
                                        hideModal()
                                        navigate(`/${type}/genre-${element.id}`)
                                    }}>
                                    # {translateGenre(element.name)}
                                </GenreTag>
                            )
                        })}
                </div>
            </div>
        </ModalDetailInfoWrapper>
    )
}

export default ModalDetailInfoWithLink
