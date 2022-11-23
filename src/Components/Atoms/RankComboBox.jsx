import styled from 'styled-components'

const RankSelect = styled.select`
    border-width: 0;
    width: 100rem;
    text-align: center;
    font-size: 16rem;
    &:hover{
        cursor: pointer;
    }
`

function RankComboBox({ id, rank, updateUserData}) {
    return(
        <RankSelect value={rank} onChange={(e) => updateUserData(id, e.target.value)}>
            <option value='매니저'>매니저</option>
            <option value='회원'>회원</option>
        </RankSelect>
    )
}

export default RankComboBox