import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context'
import { EpisodeCharacters } from './EpisodeCharacters'
function Episode() {
    const { darkTheme, show, setShow } = useContext(Context)
    const [episode, setEpisode] = useState([])
    const [list, setList] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    const arr = []

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then((response) => response.json())
            .then((data) => setEpisode(data))
        // eslint-disable-next-line
    }, [])

    if (episode.name) {
        episode.characters.forEach((element) => {
            fetch(`https://rickandmortyapi.com/api/character/${element.slice(42)}`)
                .then((response) => response.json())
                .then((data) => arr.push(data))
        })
    }

    const goBack = () => {
        navigate(-1)
        setShow(false)
    }
    const handleClick = () => {
        setShow(!show)
        setList(arr)
    }

    return (
        <>
            {!episode.name ? (
                <h6 className="loading">Loading</h6>
            ) : (
                <div className="single-character">
                    <button
                        className={darkTheme ? 'goback black-button' : 'goback white-button'}
                        onClick={goBack}>
                        Go back
                    </button>
                    <h2>Episode description</h2>
                    <p>
                        Episode name: <span className="character-name">{episode.name}</span>
                    </p>
                    <p>
                        Air date: <span className="character-name">{episode.air_date}</span>
                    </p>
                    {/* {show ? <EpisodeCharacters arr={arr} /> : null} */}
                    <button
                        className={darkTheme ? 'show-black' : 'show-white'}
                        onClick={handleClick}>
                        {show ? 'Hide' : 'Show'} episode characters
                    </button>
                    {show ? <EpisodeCharacters list={list} /> : null}
                </div>
            )}
        </>
    )
}

export { Episode }
