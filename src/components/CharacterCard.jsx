import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context'

function CharacherCard() {
    const { darkTheme, setShow } = useContext(Context)
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
        // eslint-disable-next-line
    }, [])

    const goBack = () => {
        navigate(-1)
        setShow(false)
    }

    return (
        <>
            {!character.name ? (
                <h6 className="loading">Loading</h6>
            ) : (
                <div className="single-character">
                    <button
                        className={darkTheme ? 'goback black-button' : 'goback white-button'}
                        onClick={goBack}>
                        Go back
                    </button>
                    <h2>Character description</h2>
                    <div className="single-content">
                        <div>
                            <img src={character.image} alt="" />
                        </div>
                        <div className="single-description">
                            <h3>{character.name}</h3>
                            <p>
                                Status: <span className="character-name">{character.status}</span>
                            </p>
                            <p>
                                Gender: <span className="character-name">{character.gender}</span>
                            </p>
                            <p>
                                Species: <span className="character-name">{character.species}</span>
                            </p>
                            <p>
                                Origin name:{' '}
                                <span className="character-name">{character.origin.name}</span>
                            </p>
                            <p>
                                Location name:{' '}
                                <span className="character-name">{character.location.name}</span>
                            </p>
                            <p>
                                This character appears in the following episodes:
                                <span className="character-name">
                                    {character.episode.map((elem) => (
                                        <Link
                                            to={`/episode/${elem.slice(40)}`}
                                            className="episode-list">
                                            {' '}
                                            {elem.slice(40)}
                                            {', '}
                                        </Link>
                                    ))}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export { CharacherCard }
