import { useState } from 'react'
import styled from 'styled-components'
import { getRandomColor } from '../../../Modules/utils'

const ModalPosterImageImg = styled.img`
    position: relative;
    width: 240rem;
    height: 360rem;
    border-radius: 6rem;
`

const SkeletonDiv = styled.div`
    width: 240rem;
    height: 360rem;
    transition: all 0.3s;
    background-color: ${(props) => props.color};
    border-radius: 6rem;
`

function ModalPosterImage({ url }) {
    const [imageStatus, setImageStatus] = useState(true)
    return (
        <div>
            {imageStatus && (
                <ModalPosterImageImg
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${url}`}
                    onError={() => {
                        setImageStatus(false)
                    }}
                />
            )}
            {!imageStatus && <SkeletonDiv color={getRandomColor()} />}
        </div>
    )
}

export default ModalPosterImage
