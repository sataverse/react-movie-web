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

function ModalDetailInfoWithLink({ text1, genres, hideModal }) {
    const navigate = useNavigate()
    return (
        <ModalDetailInfoWrapper className='fc fsevenly'>
            <div>
                <ModalDetailInfoText1>{text1}</ModalDetailInfoText1>
                <div className='fr'>
                    {genres != undefined &&
                        genres.map((element) => {
                            return (
                                <GenreTag
                                    key={`detail-content-genre-tag-${element.id}`}
                                    onClick={() => {
                                        hideModal()
                                        navigate(`/movie/genre-${element.id}`)
                                    }}>
                                    # {element.name}
                                </GenreTag>
                            )
                        })}
                </div>
            </div>
        </ModalDetailInfoWrapper>
    )
}

export default ModalDetailInfoWithLink
