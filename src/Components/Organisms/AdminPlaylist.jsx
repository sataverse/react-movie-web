import styled from 'styled-components'
import ModalPlayList from './ModalPlaylist'
import ModalSignOut from './ModalConfirm'
import ModalSelectType from './ModalSelectType'
import PenIcon from '../Atoms/Svg/PenIcon'
import TrashIcon from '../Atoms/Svg/TrashIcon'
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
    border-radius: 10rem 10rem 0 0;
    background-color: #E9E9E9;
`

const TableContentList = styled.div`
    position: relative;
    width: 1200rem;
    height: 70rem;
`

const TableContentInnerDataDiv = styled.div`
    position: relative;
    top: 35%;
    width: ${(props) => props.$width}rem;
    height: 25rem;
    font-size: 16rem;
    color: ${(props) => {
        if(props.$isTop) return '#9D9D9D'
        else return 'var(--w-black)'
    }};
    margin-left: 30rem;
    overflow: hidden;
`

const TableContentInnerDataButton = styled.div`
    position: relative;
    top: 35%;
    width: ${(props) => props.$width}rem;
    height: 25rem;
    font-size: 16rem;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
`

const PlaylistAddButton = styled.div`
    position: relative;
    width: 1200rem;
    height: 70rem;
    line-height: 70rem;
    text-align: center;
    color: #9D9D9D;
    font-size: 20rem;
    &:hover{
        background-color: #E9E9E9;
        cursor: pointer;
    }
`

function AdminPlaylist( { playlistData, modifyPlaylistData, addPlaylistData, deletePlaylistData } ) {
    const [createModal, setCreateModal] = React.useState(false)
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [selectModal, setSelectModal] = React.useState(false)
    const [showIcon, setShowIcon] = React.useState(false)
    const [noScroll, setScroll] = React.useState(false)

    const [index, setIndex] = React.useState(0)
    const [delteIndex, setDeleteIndex] = React.useState(0)

    const [type, setType] = React.useState('movie')
    const [id, setId] = React.useState(-1)
    const [title, setTitle] = React.useState('')
    const [playlist, setPlaylist] = React.useState([])
    
    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    const hidePlaylistModal = () => {
        setCreateModal(false)
        setScroll(false)
    }

    const hideConfirmModal = () => {
        setConfirmModal(false)
        setScroll(false)
    }

    const showSelectModal = () => {
        setScroll(true)
        setSelectModal(true)
        document.body.style.overflow = 'none'
    }

    const hideSelectModal = () => {
        setScroll(false)
        setSelectModal(false)
    }

    const createPlaylist = t => {
        setType(t)
        hideSelectModal()
        changePlaylist(playlistData.length)
    }

    const changePlaylist = (idx) => {
        if(idx==playlistData.length) {
            setPlaylist([])
            setTitle('')
            setId(-1)
        }
        else {
            setPlaylist(playlistData[idx].playlist)
            setTitle(playlistData[idx].title)
            setId(playlistData[idx].id)
            setType(playlistData[idx].type)
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

    const savePlaylist = () => {
        if(index == playlistData.length){
            addPlaylistData(title, playlist.join(','), type)
        } else {
            modifyPlaylistData(id, title, playlist.join(','))
        }
        hidePlaylistModal()
    }

    const newTitle = title => setTitle(title)

    const addItem = (id) => {
        setPlaylist([...playlist, id])
    }

    const deleteItem = (id) => {
        const newList = playlist.filter(item => item !== id)
        setPlaylist(newList)
    }

    return(
        <>
        <AdminPlaylistWrapper className='hcenter'>
            <TableTop className='fr hcenter'>
                <TableContentInnerDataDiv key={'0-1'} $width={200} $isTop={true}>플레이리스트 이름</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-2'} $width={120} $isTop={true} style={{marginLeft: '40rem'}}>분류</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-3'} $width={600} $isTop={true} style={{marginLeft: '40rem'}}>영화 목록</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-4'} $width={100} $isTop={true}></TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-5'} $width={100} $isTop={true}></TableContentInnerDataDiv>
            </TableTop>
            <TableHR />   
            {playlistData.map((list, idx) => (
                <>
                    <TableContentList key={idx} className='fr hcenter'>
                        <TableContentInnerDataDiv key={`${idx+1}-1`} $width={200} $isTop={false}>{list.title}</TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-2`} $width={120} $isTop={false}>{list.type=='movie' ? '영화' : 'TV프로그램'}</TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-3`} $width={600} $isTop={false}>{list.playlist.join(', ')}</TableContentInnerDataDiv>
                        <TableContentInnerDataButton key={`${idx+1}-4`} onClick={() => changePlaylist(idx)} $width={100}>
                            <PenIcon className='hcenter' width={'30'} height={'30'}/>
                        </TableContentInnerDataButton>
                        <TableContentInnerDataButton key={`${idx+1}-5`} onClick={() => checkDelete(idx)} $width={100}>
                            <TrashIcon className='hcenter' width={'30'} height={'30'}/>
                        </TableContentInnerDataButton>
                    </TableContentList>
                    <TableHR />
                </>
            ))}
            <PlaylistAddButton className='hcenter' onClick={() => showSelectModal()} onMouseOver={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} >
                {showIcon ? '추가하기' : null}
            </PlaylistAddButton>
            <TableHR />
        </AdminPlaylistWrapper>
        {createModal ? <ModalPlayList title={title} playlist={playlist} type={type} newTitle={newTitle} addItem={addItem} deleteItem={deleteItem} savePlaylist={savePlaylist} hidePlaylistModal={hidePlaylistModal}/> : null}
        {confirmModal ? <ModalSignOut msg={'정말로 삭제할까요?'} cancel={hideConfirmModal} confirm={deleteList}/> : null}
        {selectModal ? <ModalSelectType msg={'플레이리스트 종류를 선택해 주세요'} cancel={hideSelectModal} confirm={createPlaylist}/> : null}
        </>
    )
}

export default AdminPlaylist