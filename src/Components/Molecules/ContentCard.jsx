import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import CardImage from '../Atoms/Card/CardImage'
import CardTextTitle from '../Atoms/Card/CardTextTitle'
import CardTextDesc from '../Atoms/Card/CardTextDesc'
import CardTextScore from '../Atoms/Card/CardTextScore'
import CardIndex from '../Atoms/Card/CardIndex'
import UserStore from '../../Modules/UserStore'
import { useState, useEffect } from 'react'

const ContentCardLikeIcon = styled.button`
    position: absolute;
    right: 6rem;
    top: 6rem;
    width: 20rem;
    height: 20rem;
    background-color: transparent;
    z-index: 1000;
    cursor: pointer;
    visibility: ${(props) => (props.isFavorite == true ? 'visible' : 'hidden')};
    margin: 0;
    padding: 0;
    border: 0;

    & svg path {
        stroke: ${(props) => (props.isFavorite == true ? 'transparent' : '#E0E0E0')};
        fill: ${(props) => (props.isFavorite == true ? 'var(--w-red)' : 'transparent')};
    }

    &:hover svg path {
        stroke: transparent;
        fill: var(--w-red);
    }
`

const ContentCardDiv = styled.div`
    position: relative;
    width: 180rem;
    height: 340rem;
    background-color: var(--w-background);
    cursor: pointer;

    &:hover ${ContentCardLikeIcon} {
        visibility: visible;
    }
`

const Wrapper1 = styled.div`
    height: 70rem;
`

function ContentCard({ id, title, desc, score, posterUrl, index, type, showModal, loginStatus }) {
    const navigate = useNavigate()
    const [isFavorite, setFavorite] = useState(false)

    useEffect(() => {
        setFavorite(UserStore.findFavoriteById(id, type))
    }, [])
    useEffect(() => {
        setFavorite(UserStore.findFavoriteById(id, type))
    }, [loginStatus])

    return (
        <ContentCardDiv
            className='fc no-drag'
            onClick={() => {
                type != 'credit' ? showModal(id, type) : navigate(`/credit/${id}`)
            }}>
            <CardIndex index={index + 1} />
            <ContentCardLikeIcon
                onClick={(event) => {
                    if (!isFavorite) {
                        // 좋아요 클릭
                        UserStore.insertFavorite(id, type)
                        setFavorite(true)
                    } else {
                        // 좋아요 취소
                        UserStore.deleteFavoriteById(id, type)
                        setFavorite(false)
                    }
                    event.stopPropagation()
                }}
                isFavorite={isFavorite}>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M5.5 13.4286L10 18L14.5 13.4286C16 12.1587 19 9.00952 19 6.57143C19 3.52381 17.125 2 14.5 2C11.875 2 10 3.52381 10 5.80952C10 3.52381 8.125 2 5.5 2C2.875 2 1 3.52381 1 6.57143C1 9.00952 4 12.1587 5.5 13.4286Z' />
                    <path d='M5.5 13.4286L10 18L14.5 13.4286C16 12.1587 19 9.00952 19 6.57143C19 3.52381 17.125 2 14.5 2C11.875 2 10 3.52381 10 5.80952C10 3.52381 8.125 2 5.5 2C2.875 2 1 3.52381 1 6.57143C1 9.00952 4 12.1587 5.5 13.4286Z' />
                </svg>
            </ContentCardLikeIcon>
            <CardImage posterUrl={posterUrl} />
            <Wrapper1 className='fc fsevenly'>
                <CardTextTitle text={title} />
                <div className='fr fsbetween'>
                    <CardTextDesc text={desc} />
                    {type != 'credit' ? <CardTextScore text={score} /> : <div></div>}
                </div>
            </Wrapper1>
        </ContentCardDiv>
    )
}

export default ContentCard
