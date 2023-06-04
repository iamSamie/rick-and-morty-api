import { CharacterList } from './CharacterList'

function EpisodeCharacters(props) {
    const { list } = props

    return (
        <div className="list">
            {list.map((item) => (
                <CharacterList key={item.id} {...item} />
            ))}
        </div>
    )
}

export { EpisodeCharacters }
