import styled from 'styled-components'
import ModalSignOut from './ModalConfirm'
import RankComboBox from '../Atoms/RankComboBox'
import DeleteIcon from '../Atoms/Svg/DeleteIcon'
import React, { useState, useEffect } from 'react'

const AdminUserWrapper = styled.div`
    position: relative;
    width: 1280rem;
    height: 600rem;
    background-color: transparent;
    padding: 10rem 0;
    overflow: auto;
`

const TableHR = styled.div`
    position: relative;
    width: 1000rem;
    height: 1.5rem;
    background-color: #9D9D9D;
    left: 50%;
    transform: translateX(-50%);
`

const TableTop = styled.div`
    position: relative;
    width: 1000rem;
    height: 50rem;
    border-radius: 15rem 15rem 0 0;
    background-color: #E9E9E9;
`

const TableContentList = styled.div`
    position: relative;
    width: 1000rem;
    height: 70rem;
`

const TableContentInnerDataDiv = styled.div`
    position: relative;
    top: 35%;
    width: ${(props) => props.$width}rem;
    height: 25rem;
    font-size: 16rem;
    text-align: center;
    color: ${(props) => {
        if(props.$isTop) return '#9D9D9D'
        else return 'var(--w-black)'
    }};
`

const TableContentInnerDataButton = styled.div`
    position: relative;
    top: 35%;
    width: ${(props) => props.$width}rem;
    height: 25rem;
    text-align: center;
    background-color: transparent;
    border-width: 0;
    &:hover{
        cursor: pointer;
    }
`

function AdminUser({userData, updateUserData, deleteUserData}) {
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [noScroll, setScroll] = useState(false)
    const [index, setIndex] = React.useState(0)
    
    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    const checkDelete = i => {
        setConfirmModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
        setIndex(i)
    }

    const deleteUser = () => {
        deleteUserData(userData[index].id)
        hideConfirmModal()
    }

    const hideConfirmModal = () => {
        setConfirmModal(false)
        setScroll(false)
    }

    return(
        <>
        <AdminUserWrapper className='hcenter'>
            <TableTop className='fr hcenter'>
                <TableContentInnerDataDiv key={'0-1'} $width={250} $isTop={true}>이메일</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-2'} $width={200} $isTop={true}>닉네임</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-3'} $width={150} $isTop={true}>등급</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-4'} $width={250} $isTop={true}>가입일</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-5'} $width={150} $isTop={true}></TableContentInnerDataDiv>
            </TableTop>
            <TableHR />   
            {userData.map((list, idx) => (
                <>
                    <TableContentList key={idx} className='fr hcenter'>
                        <TableContentInnerDataDiv key={`${idx+1}-1`} $width={250} $isTop={false}>{list.email}</TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-2`} $width={200} $isTop={false}>{list.nickname}</TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-3`} $width={150} $isTop={false}>
                            {list.rank == '마스터' ? list.rank : <RankComboBox id={list.id} rank={list.rank} updateUserData={updateUserData} />}
                        </TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-4`} $width={250} $isTop={false}>{list.signupDate}</TableContentInnerDataDiv>
                        {list.rank == '회원' ? <TableContentInnerDataButton onClick={() => checkDelete(idx)} key={`${idx+1}-5`} $width={150} $color={'red'}><DeleteIcon width={'30'} height={'30'}/></TableContentInnerDataButton> : null}
                    </TableContentList>
                    <TableHR />
                </>
            ))}
        </AdminUserWrapper>
        {confirmModal ? <ModalSignOut msg={'정말로 탈퇴시킬까요?'} cancel={hideConfirmModal} confirm={deleteUser}/> : null}
        </>
    )
}

export default AdminUser