import { useContext, useEffect } from 'react'
import { Context } from '../context'
import { SearchFilter } from './SearchFilter'
import { List } from './List'

function Main() {
    const { loading, search, setLoading, setData, filterSelect, filterStatus, filterGender } =
        useContext(Context)

    useEffect(
        function getData() {
            fetch(
                `https://rickandmortyapi.com/api/character/${
                    search !== '' ? `?name=${search}` : ''
                }${search !== '' && filterSelect ? '&' : '?'}${
                    filterStatus ? `status=${filterSelect}` : ''
                }${filterGender ? `gender=${filterSelect}` : ''}`
            )
                .then((response) => response.json())
                .then((data) => {
                    data.results && setData(data.results)
                    setLoading(false)
                })
        },
        // eslint-disable-next-line
        [search, filterSelect, filterGender, filterStatus]
    )

    return (
        <div className="content">
            <SearchFilter />
            {loading ? <></> : <List />}
        </div>
    )
}

export { Main }
