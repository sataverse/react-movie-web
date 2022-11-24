import styled from "styled-components"
import AddIcon from "../Atoms/Svg/AddIcon"

const ModalPlaylistSearchImg = styled.img`
    width: 100rem;
    height: 150rem;
    border-radius: 10rem;
`

const ModalPlaylistSearchDiv = styled.div`
    width: 200rem;
    height: 150rem;
    font-size: 15rem;
`

const ModalPlaylistSearchTitle = styled.div`
    position: relative;
    width: 200rem;
    height: 40rem;
    margin-left: 20rem;
    top: 20rem;
    font-size: 15rem;
`

const ModalPlaylistSearchRating = styled.div`
    position: relative;
    width: 200rem;
    height: 40rem;
    margin-left: 20rem;
    top: 60rem;
    font-size: 15rem;
    color: ${(props) => {
        if (props.$score >= 70) return '#2FCC5B'
        else if (props.$score < 50) return '#F23535'
        else return '#FF9900'
    }};
`

const ModalPlaylistAddButton = styled.button`
    position: relative;
    width: 60rem;
    height: 60rem;
    left: 20rem;
    top: 45rem;
    background-color: transparent;
    border-width: 0;
    &:hover {
        cursor: pointer;
    }
`

function MiniSearch({item, playlist, addThis}) {
    return (
        <>
            <ModalPlaylistSearchImg src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} />
            <ModalPlaylistSearchDiv>
                <ModalPlaylistSearchTitle>{item.title}</ModalPlaylistSearchTitle>
                <ModalPlaylistSearchRating $score={item.vote_average}>{item.vote_average}%</ModalPlaylistSearchRating>
            </ModalPlaylistSearchDiv>
            {playlist.indexOf(item.id) == -1 ? <ModalPlaylistAddButton onClick={() => addThis(item.id)}><AddIcon width={50} height={50}/></ModalPlaylistAddButton> : null}
        </>
    )
}

export default MiniSearch