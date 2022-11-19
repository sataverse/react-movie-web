import styled from 'styled-components'

const DraggableSliderItemForPeopleWrapper = styled.div`
    width: 230rem;
    height: 70rem;
    font-weight: 400;
    font-size: 16rem;
    line-height: 38rem;
    color: var(--w-black);
    box-shadow: 4rem 4rem 4rem rgba(105, 105, 105, 0.25);
    border-radius: 6rem;
`

const DraggableSliderItemForPeopleImageNull = styled.div`
    width: 55rem;
    height: 70rem;
    border-radius: 6rem;
    background-color: var(--w-graywhite);
`

const DraggableSliderItemForPeopleImage = styled.img`
    width: 55rem;
    height: 70rem;
    object-fit: cover;
    border-radius: 6rem;
`

const CreditName = styled.span`
    font-weight: 700;
    font-size: 14rem;
    line-height: 20rem;
    color: #252525;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const CreditCharacter = styled.span`
    font-weight: 400;
    font-size: 14rem;
    line-height: 20rem;
    color: #696969;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

function DraggableSliderItemForPeople({ name, character, src }) {
    return (
        <DraggableSliderItemForPeopleWrapper className='fr fsbetween'>
            {src != null ? (
                <DraggableSliderItemForPeopleImage src={`https://image.tmdb.org/t/p/w92${src}`} />
            ) : (
                <DraggableSliderItemForPeopleImageNull />
            )}
            <div className='fc fsevenly' style={{ width: '175rem' }}>
                <div className='fc fsevenly hcenter' style={{ width: '140rem' }}>
                    <CreditName>{name}</CreditName>
                    <CreditCharacter>{character}</CreditCharacter>
                </div>
            </div>
        </DraggableSliderItemForPeopleWrapper>
    )
}

export default DraggableSliderItemForPeople
