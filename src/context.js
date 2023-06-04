import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextFunction = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true)
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [filterSelect, setFilterSelect] = useState('filter')
    const [filterStatus, setFilterStatus] = useState(false)
    const [filterGender, setFilterGender] = useState(false)
    const [show, setShow] = useState(false)
    return (
        <Context.Provider
            value={{
                darkTheme,
                setDarkTheme,
                filterSelect,
                setFilterSelect,
                data,
                setData,
                loading,
                setLoading,
                search,
                setSearch,
                filterStatus,
                setFilterStatus,
                filterGender,
                setFilterGender,
                show,
                setShow,
            }}>
            {children}
        </Context.Provider>
    )
}
