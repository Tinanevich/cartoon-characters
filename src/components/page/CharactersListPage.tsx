import CharactersList from 'components/CharactersList';
import { useState, useEffect } from 'react';
import getCharacters from 'services/getCharacters';
import { ICharacter } from 'types/ICharacter';
import ToTop from 'components/ToTop';
import { ICharacterInfo } from 'types/ICharacter';

const initialUrl = 'https://rickandmortyapi.com/api/character';

const CharactersListPage = () => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [charactersMetaData, setCharactersMetaData] = useState<ICharacterInfo>({} as ICharacterInfo);

  const addCharacters = async () => {
    const nextPageUrl = charactersMetaData.next;
    if (nextPageUrl) {
      const {data} = await getCharacters(nextPageUrl);
      const {results, info} = data;
      setCharactersList(prev => [...prev, ...results]);
      setCharactersMetaData(info);
    }
  }

  useEffect(() => {
    getCharacters(initialUrl).then(({data}) => {
      const { results, info } = data;
      setCharactersMetaData(info);
      setCharactersList(results);
      })

  }, [])

  return (
    <div className="CharactersListPage">
      <CharactersList list={charactersList}/>
      <ToTop/>
      <button onClick={addCharacters}>addCharacters</button>
    </div>
  );
}

export default CharactersListPage;