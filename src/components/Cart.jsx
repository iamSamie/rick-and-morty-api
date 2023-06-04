import { useContext } from 'react'
import { Context } from '../context'
import { Link } from 'react-router-dom'

function Cart(props) {
    const { darkTheme } = useContext(Context)
    const { id, name, image, status, gender } = props
    return (
        <Link to={`/${id}`} className="cart">
            <div className="picture">
                <img className="character-picture" src={image} alt="" />
            </div>
            <div className={darkTheme ? 'description' : 'description-dark'}>
                <p className="country-name">Name: {name}</p>
                <p className="country-name">Status: {status}</p>
                <p className="country-name">Gender: {gender}</p>
            </div>
        </Link>
    )
}

export { Cart }
