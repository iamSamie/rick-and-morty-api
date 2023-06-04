import { useContext } from 'react'
import { Context } from '../context'
import { Cart } from './Cart'

function List() {
    const { data = [] } = useContext(Context)

    if (!data.length) {
        return <h2>Nothing found</h2>
    }

    return (
        <div className="list">
            {data.map((item) => (
                <Cart key={item.id} {...item} />
            ))}
        </div>
    )
}

export { List }
