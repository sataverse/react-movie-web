import styled from "styled-components"
import { useEffect, useState } from "react"

const ModalPlaylistAddedDiv = styled.div`
    width: ${(props) => {
        if(props.$size == 'medium') return '120rem'
        else return '60rem'
    }};
    height: ${(props) => {
        if(props.$size == 'medium') return '180rem'
        else return '90rem'
    }};
    border-radius: 10rem;
    margin: 10rem;
    &:hover {
        cursor: pointer;
    }
`

const ModalPlaylistAddedImg = styled.img`
    width: ${(props) => {
        if(props.$size == 'medium') return '120rem'
        else return '60rem'
    }};
    height: ${(props) => {
        if(props.$size == 'medium') return '180rem'
        else return '90rem'
    }};
    border-radius: 10rem;
    &:hover {
        filter: opacity(30%);
    }
`

function MiniCard({id, deleteThis, size}) {
    const [path, setPath] = useState('')
    const [showIcon, setShowIcon] = useState(false)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6199da9940f55ef72ddc1512ea6eca9a&language=ko`)
        .then((response) => response.json())
        .then((data) => setPath(data.poster_path))
    })

    return (
        <>
            <ModalPlaylistAddedDiv $size={size} onClick={() => deleteThis(id)} onMouseOver={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} >
                <ModalPlaylistAddedImg $size={size} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${path}`}></ModalPlaylistAddedImg> 
            </ModalPlaylistAddedDiv>
        </>
    )
}

export default MiniCard