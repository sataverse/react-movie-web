import styled from 'styled-components'

const AdminNavDiv = styled.div`
    position: relative;
    margin: 0 auto;
    height: 30rem;
    background-color: transparent;
`

const AdminNavInnerDiv = styled.div`
    text-align: center;
    font-size: 18rem;
    color: ${(props) => {
        if(props.$selected) return 'var(--w-black)'
        else return 'var(--w-graywhite)'
    }};
    cursor: pointer;
`

function AdminNavElement({text, index, current, changeManageType}) {
    return(
        <AdminNavDiv>
            <AdminNavInnerDiv $selected={current == index} onClick={() => changeManageType(index)}>{text}</AdminNavInnerDiv>
        </AdminNavDiv>
    )    
}

export default AdminNavElement