import { useContext } from 'react'
import { Context } from '../context'

function Theme({ children }) {
    const { darkTheme } = useContext(Context)

    return <div className={darkTheme ? 'dark' : 'white'}>{children}</div>
}

export { Theme }
