import { useContext } from 'react'
import { Context } from '../context'

function Select() {
    const { darkTheme, filterSelect, setFilterSelect, setFilterStatus, setFilterGender } =
        useContext(Context)

    const handleFilter = (event) => {
        if (
            event.target.value === 'alive' ||
            event.target.value === 'dead' ||
            event.target.value === 'unknown'
        ) {
            setFilterStatus(true)
            setFilterGender(false)
        }
        if (
            event.target.value === 'male' ||
            event.target.value === 'female' ||
            event.target.value === 'genderless'
        ) {
            setFilterGender(true)
            setFilterStatus(false)
        }
        if (event.target.value === '' || event.target.value === undefined) {
            setFilterGender(false)
            setFilterStatus(false)
        }
        setFilterSelect(event.target.value)
    }

    return (
        <select
            className={darkTheme ? '' : 'select-dark'}
            value={filterSelect}
            onChange={handleFilter}>
            <option value="filter" selected>
                Filter
            </option>
            <optgroup label="Status">
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </optgroup>
            <optgroup label="Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
            </optgroup>
        </select>
    )
}

export { Select }
