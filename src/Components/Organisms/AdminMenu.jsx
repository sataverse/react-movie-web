import styled from 'styled-components'
import AdminNavElement from '../Atoms/AdminNavElement'

const AdminMenuWrapper = styled.div`
    position: relative;
    width: 960rem;
    height: 100rem;
    align-items: center;
`

const AdminMenuVerticalHR = styled.div`
    width: 1rem;
    height: 30rem;
    background-color: var(--w-graywhite);
`

function AdminMenu({manageType, changeManageType}) {
    return(
        <AdminMenuWrapper className='fr hcenter'>
            <AdminNavElement text={'메인배너 관리'} index={0} current={manageType} changeManageType={changeManageType}/>
            <AdminMenuVerticalHR />
            <AdminNavElement text={'플레이리스트 관리'} index={1} current={manageType} changeManageType={changeManageType}/>
            <AdminMenuVerticalHR />
            <AdminNavElement text={'회원 관리'} index={2} current={manageType} changeManageType={changeManageType}/>
        </AdminMenuWrapper>
    )
}

export default AdminMenu