import styled from 'styled-components'
import ModalPlayList from './ModalPlaylist'
import ModalSignOut from './ModalConfirm'
import React, { useState, useEffect } from 'react'

const AdminPlaylistWrapper = styled.div`
    position: relative;
    width: 1280rem;
    height: 600rem;
    background-color: transparent;
    padding: 10rem 0;
    overflow: auto;
`

const TableHR = styled.div`
    position: relative;
    width: 1200rem;
    height: 1.5rem;
    background-color: #9D9D9D;
    left: 50%;
    transform: translateX(-50%);
`

const TableTop = styled.div`
    position: relative;
    width: 1200rem;
    height: 50rem;
    border-radius: 15rem 15rem 0 0;
    background-color: #E9E9E9;
`

const TableContent = styled.ul`
    position: relative;
    list-style: none;
    padding-left: 0px;
`

const TableContentList = styled.li`
    position: relative;
    width: 1200rem;
    height: 70rem;
`

const TableContentInnerDataDiv = styled.div`
    position: relative;
    top: 80%;
    transform: translateY(-50%);
    width: ${(props) => props.$width}rem;
    height: ${(props) => {
        if(props.$isTop) return '50rem'
        else return '70rem'
    }};
    font-size: 16rem;
    color: ${(props) => {
        if(props.$isTop) return '#9D9D9D'
        else return 'var(--w-black)'
    }};
    text-align: center;
`

const TableContentInnerDataButton = styled.div`
    position: relative;
    top: 75%;
    transform: translateY(-50%);
    width: ${(props) => props.$width}rem;
    height: 70rem;
    font-size: 16rem;
    color: ${(props) => {
        if(props.$color == 'red') return 'var(--w-red)'
        else return 'var(--w-gary)'
    }};
    text-align: center;
    background-color: transparent;
    border-width: 0;
    &:hover{
        cursor: pointer;
    }
`

function AdminPlaylist( { playlistData, modifyPlaylistData, addPlaylistData, deletePlaylistData } ) {
    const [createModal, setCreateModal] = React.useState(false)
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [noScroll, setScroll] = useState(false)

    const [index, setIndex] = React.useState(0)
    const [delteIndex, setDeleteIndex] = React.useState(0)

    const [id, setId] = React.useState(-1)
    const [title, setTitle] = React.useState('')
    const [playlist, setPlaylist] = React.useState([])
    
    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    const addPlaylist = (idx) => {
        if(idx==playlistData.length) {
            setPlaylist([])
            setTitle('')
            setId(-1)
        }
        else {
            setPlaylist(playlistData[idx].playlist)
            setTitle(playlistData[idx].title)
            setId(playlistData[idx].id)
        }
        setIndex(idx)
        setCreateModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }

    const checkDelete = i => {
        setConfirmModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
        setDeleteIndex(i)
    }

    const deleteList = () => {
        deletePlaylistData(playlistData[delteIndex].id)
        hideConfirmModal()
    }

    const newTitle = title => setTitle(title)

    const addItem = (id) => {
        setPlaylist([...playlist, id])
    }

    const deleteItem = (id) => {
        const newList = playlist.filter(item => item !== id)
        setPlaylist(newList)
    }

    const savePlaylist = () => {
        if(index == playlistData.length){
            addPlaylistData(title, playlist.join(','))
        } else {
            modifyPlaylistData(id, title, playlist.join(','))
        }
        hidePlaylistModal()
    }

    const hidePlaylistModal = () => {
        setCreateModal(false)
        setScroll(false)
    }

    const hideConfirmModal = () => {
        setConfirmModal(false)
        setScroll(false)
    }

    return(
        <>
        <AdminPlaylistWrapper className='hcenter'>
            <TableTop className='fr hcenter'>
                <TableContentInnerDataDiv key={'0-2'} $width={250} $isTop={true}>플레이리스트 이름</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-3'} $width={700} $isTop={true}>영화 목록</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-4'} $width={100} $isTop={true}></TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-5'} $width={100} $isTop={true}></TableContentInnerDataDiv>
            </TableTop>
            <TableHR />   
            <TableContent>
                {playlistData.map((list, idx) => (
                    <>
                        <TableContentList key={idx} className='fr hcenter'>
                            <TableContentInnerDataDiv key={`${idx+1}-2`} $width={250} $isTop={false}>{list.title}</TableContentInnerDataDiv>
                            <TableContentInnerDataDiv key={`${idx+1}-3`} $width={700} $isTop={false}>{list.playlist.join(', ')}</TableContentInnerDataDiv>
                            <TableContentInnerDataButton key={`${idx+1}-4`} onClick={() => addPlaylist(idx)} $width={100} $color={'gray'}>수정</TableContentInnerDataButton>
                            <TableContentInnerDataButton key={`${idx+1}-5`} onClick={() => checkDelete(idx)} $width={100} $color={'red'}>삭제</TableContentInnerDataButton>
                        </TableContentList>
                        <TableHR />
                    </>
                ))}
                <TableContentList key={0} className='hcenter'>
                    <TableContentInnerDataDiv key={'add'} $width={200} $isTop={false} className='fr hcenter'>
                        <button onClick={() => addPlaylist(playlistData.length)}>추가하기</button>
                    </TableContentInnerDataDiv>
                </TableContentList>
            </TableContent>
        </AdminPlaylistWrapper>
        {createModal ? <ModalPlayList title={title} playlist={playlist} newTitle={newTitle} addItem={addItem} deleteItem={deleteItem} savePlaylist={savePlaylist} hidePlaylistModal={hidePlaylistModal}/> : null}
        {confirmModal ? <ModalSignOut msg={'정말로 삭제할까요?'} cancel={hideConfirmModal} confirm={deleteList}/> : null}
        </>
    )
}

export default AdminPlaylist