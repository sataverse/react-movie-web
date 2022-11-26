import styled from 'styled-components'
import { useRef, useState } from 'react'
import { getRandomColor } from '../../../Modules/utils'

const SearchCardImageImg = styled.img`
    width: 92rem;
    height: 138rem;
    transition: all 0.3s;
    border-radius: 6rem;
    &:hover {
        transform: scale(1.05);
    }
`

const SkeletonDiv = styled.div`
    width: 92rem;
    height: 138rem;
    transition: all 0.3s;
    background-color: ${(props) => props.color};
    border-radius: 6rem;
`

function SearchCardImage({ posterUrl }) {
    const [imageStatus, setImageStatus] = useState(true)
    return (
        <div>
            {imageStatus && (
                <SearchCardImageImg
                    className='no-drag'
                    loading='lazy'
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterUrl}?api_key=6199da9940f55ef72ddc1512ea6eca9a`}
                    onError={() => {
                        setImageStatus(false)
                    }}
                />
            )}
            {!imageStatus && <SkeletonDiv color={getRandomColor()} />}
        </div>
    )
}

export default SearchCardImage
