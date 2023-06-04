import { useContext } from 'react'
import { Context } from '../context'

function CharacterList(props) {
    const { image, name, status, gender } = props
    const { darkTheme } = useContext(Context)

    return (
        <div className="cart">
            <div className="picture">
                <img className="character-picture" src={image} alt="" />
            </div>
            <div className={darkTheme ? 'description' : 'description-dark'}>
                <p className="country-name">Name: {name}</p>
                <p className="country-name">Status: {status}</p>
                <p className="country-name">Gender: {gender}</p>
            </div>
        </div>
    )
}

export { CharacterList }
