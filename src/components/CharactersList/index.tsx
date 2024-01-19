import CharactersItem from "./components/CharactersItem";

import { ICharacter} from 'types/ICharacter';


import './styles.scss';

interface ICharacterProps {
    list: ICharacter[];
}

const CharactersList: React.FC<ICharacterProps> = ({ list }) => {
    return(
        <div className="charactersList">
            {list.length > 0 && list.map((character: ICharacter) => (
                <CharactersItem key={character.id} item={character}/>
            ))}
        </div>
    )
}

export default CharactersList;