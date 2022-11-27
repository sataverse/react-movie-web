import styled from 'styled-components'
import ModalBanner from './ModalBanner'
import ModalSignOut from './ModalConfirm'
import PenIcon from '../Atoms/Svg/PenIcon'
import TrashIcon from '../Atoms/Svg/TrashIcon'
import React, { useState, useEffect } from 'react'

const AdminMainBannerWrapper = styled.div`
    position: relative;
    width: 1280rem;
    height: 600rem;
    background-color: transparent;
    padding: 10rem 0;
    overflow: auto;
`

const TableHR = styled.div`
    position: relative;
    width: 1100rem;
    height: 1.5rem;
    background-color: #9D9D9D;
    left: 50%;
    transform: translateX(-50%);
`

const TableTop = styled.div`
    position: relative;
    width: 1100rem;
    height: 50rem;
    border-radius: 10rem 10rem 0 0;
    background-color: #E9E9E9;
`

const TableContentList = styled.div`
    position: relative;
    width: 1100rem;
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

const BannerAddButton = styled.div`
    position: relative;
    width: 1100rem;
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

function AdminMainBanner( { bannerData, modifyBannerData, addBannerData, deleteBannerData } ) {
    const [bannerModal, setBannerModal] = React.useState(false)
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [showIcon, setShowIcon] = React.useState(false)
    const [noScroll, setScroll] = React.useState(false)

    const [index, setIndex] = React.useState(0)
    const [deleteIndex, setDeleteIndex] = React.useState(0)

    const [id, setId] = React.useState(-1)
    const [movieId, setMovieId] = React.useState(-1)
    const [title, setTitle] = React.useState()
    const [type, setType] = React.useState('movie')
    const [comment, setComment] = React.useState()
    
    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    const hideBannerModal = () => {
        setBannerModal(false)
        setScroll(false)
    }

    const hideConfirmModal = () => {
        setConfirmModal(false)
        setScroll(false)
    }

    const changeBanner = (idx) => {
        if(idx==bannerData.length) {
            setId(-1)
            setMovieId(-1)
            setTitle()
            setType('movie')
            setComment()
        }
        else {
            setId(bannerData[idx].id)
            setMovieId(bannerData[idx].movieId)
            setTitle(bannerData[idx].title)
            setType(bannerData[idx].type)
            setComment(bannerData[idx].comment)
        }
        setIndex(idx)
        setBannerModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }

    const checkDelete = i => {
        setConfirmModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
        setDeleteIndex(i)
    }

    const deleteBanner = () => {
        deleteBannerData(bannerData[deleteIndex].id)
        hideConfirmModal()
    }

    const saveBanner = () => {
        if(index == bannerData.length){
            addBannerData(movieId, title, type, comment)
        } else {
            modifyBannerData(id, movieId, title, type, comment)
        }
        hideBannerModal()
    }

    const newMovieId = movieId => setMovieId(movieId)
    const newTitle = title => setTitle(title)
    const newType = type => setType(type)
    const newComment = comment => setComment(comment)

    return(
        <>
        <AdminMainBannerWrapper className='hcenter'>
            <TableTop className='fr hcenter'>
                <TableContentInnerDataDiv key={'0-1'} $width={150} $isTop={true}>분류</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-2'} $width={250} $isTop={true} style={{marginLeft: '40rem'}}>제목</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-3'} $width={400} $isTop={true} style={{marginLeft: '50rem'}}>코멘트</TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-4'} $width={100} $isTop={true}></TableContentInnerDataDiv>
                <TableContentInnerDataDiv key={'0-5'} $width={100} $isTop={true}></TableContentInnerDataDiv>
            </TableTop>
            <TableHR key={'header'}/>   
            {bannerData.map((list, idx) => (
                <>
                    <TableContentList key={idx} className='fr hcenter'>
                        <TableContentInnerDataDiv key={`${idx+1}-1`} $width={150} $isTop={false}>{list.type == 'movie' ? '영화' : 'TV프로그램'}</TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-2`} $width={250} $isTop={false}>{list.title}</TableContentInnerDataDiv>
                        <TableContentInnerDataDiv key={`${idx+1}-3`} $width={400} $isTop={false}>{list.comment}</TableContentInnerDataDiv>
                        <TableContentInnerDataButton key={`${idx+1}-4`} onClick={() => changeBanner(idx)} $width={100}>
                            <PenIcon className='hcenter' width={'30'} height={'30'}/>
                        </TableContentInnerDataButton>
                        <TableContentInnerDataButton key={`${idx+1}-5`} onClick={() => checkDelete(idx)} $width={100}>
                            <TrashIcon className='hcenter' width={'30'} height={'30'}/>
                        </TableContentInnerDataButton>
                    </TableContentList>
                    <TableHR key={`body-${idx+1}`}/>
                </>
            ))}
            <BannerAddButton className='hcenter' onClick={() => changeBanner(bannerData.length)} onMouseOver={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} >
                {showIcon ? '추가하기' : null}
            </BannerAddButton>
            <TableHR key={'footer'}/>
        </AdminMainBannerWrapper>
        {bannerModal ? <ModalBanner title={title} type={type} comment={comment} newMovieId={newMovieId} newTitle={newTitle} newType={newType} newComment={newComment} saveBanner={saveBanner} hideBannerModal={hideBannerModal}/> : null}
        {confirmModal ? <ModalSignOut msg={'정말로 삭제할까요?'} cancel={hideConfirmModal} confirm={deleteBanner}/> : null}
        </>
    )
}

export default AdminMainBanner