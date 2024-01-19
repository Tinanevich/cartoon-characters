import CharactersList from 'components/CharactersList';
import { useState, useEffect } from 'react';
import getCharacters from 'services/getCharacters';
import { ICharacter } from 'types/ICharacter';


const CharactersListPage = () => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharacters().then(({data}) => {
      const { results } = data
      setCharactersList(results)
      })

  }, [])

  return (
    <div className="CharactersListPage">
      {<CharactersList list={charactersList}/>}
    </div>
  );
}

export default CharactersListPage;