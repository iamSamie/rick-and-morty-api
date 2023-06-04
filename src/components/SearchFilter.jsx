import { useContext } from 'react'
import { Context } from '../context'
import { Select } from './Select'

function SearchFilter() {
    const { darkTheme, search, setSearch } = useContext(Context)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="input-filter">
            <input
                className={darkTheme ? 'input-black' : 'input-white'}
                type="search"
                placeholder="Search character..."
                onChange={handleSearch}
                value={search}
            />
            <Select />
        </div>
    )
}

export { SearchFilter }
