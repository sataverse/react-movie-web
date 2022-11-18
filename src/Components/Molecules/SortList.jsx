import styled from 'styled-components'

const SortListWrapper = styled.div`
    width: 180rem;
    height: 40rem;
`

const SortListElement = styled.div`
    font-size: 16rem;
    line-height: 38rem;
    color: ${(props) => {
        if (props.current) return 'var(--w-black);'
        else return 'var(--w-gray);'
    }};
    cursor: pointer;
`

const SortListVerticalHR = styled.div`
    width: 1rem;
    height: 18rem;
    background-color: var(--w-graywhite);
`

function SortList({ sortType, changeSortType }) {
    return (
        <SortListWrapper className='fr fsbetween no-drag'>
            <SortListElement current={sortType == 'vote_average.desc'} onClick={() => changeSortType('vote_average.desc')}>
                평점순
            </SortListElement>
            <SortListVerticalHR className='vcenter' />
            <SortListElement current={sortType == 'popularity.desc'} onClick={() => changeSortType('popularity.desc')}>
                인기순
            </SortListElement>
            <SortListVerticalHR className='vcenter' />
            <SortListElement current={sortType == 'release_date.desc'} onClick={() => changeSortType('release_date.desc')}>
                최신순
            </SortListElement>
        </SortListWrapper>
    )
}

export default SortList
