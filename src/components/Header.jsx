import { useContext } from 'react'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'

function Header() {
    const {
        darkTheme,
        setDarkTheme,
        setFilterSelect,
        setSearch,
        setFilterStatus,
        setFilterGender,
        setShow,
    } = useContext(Context)

    const handleClick = () => setDarkTheme(!darkTheme)
    const navigate = useNavigate()
    const home = () => {
        setFilterGender(false)
        setFilterStatus(false)
        setFilterSelect('filter')
        setSearch('')
        navigate('/')
        setShow(false)
    }

    return (
        <header className={darkTheme ? '' : 'dark-header'}>
            <h4 onClick={home}>Rick and Morty characters</h4>
            <label className="switch">
                <input
                    type="checkbox"
                    className="switch__input"
                    checked={darkTheme}
                    onChange={handleClick}
                />
                <span className="switch__slider"></span>
            </label>
        </header>
    )
}

export { Header }
