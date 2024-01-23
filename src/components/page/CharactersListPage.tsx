import CharactersList from 'components/CharactersList';
import { useState, useEffect } from 'react';
import getCharacters from 'services/getCharacters';
import { ICharacter } from 'types/ICharacter';
import ToTop from 'components/ToTop';
import { ICharacterInfo } from 'types/ICharacter';
import { TbLoader } from 'react-icons/tb';

import './styles.scss';

const initialUrl = 'https://rickandmortyapi.com/api/character';

const CharactersListPage = () => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [charactersMetaData, setCharactersMetaData] = useState<ICharacterInfo>({} as ICharacterInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const addCharacters = async () => {
    const nextPageUrl = charactersMetaData.next;

    if (nextPageUrl) {
        try {
          setIsLoading(true);
          const { data } = await getCharacters(nextPageUrl);
          const { results, info } = data;
          setCharactersList((prev) => [...prev, ...results]);
          setCharactersMetaData(info);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getCharacters(initialUrl).then(({ data }) => {
      const { results, info } = data;
      setCharactersMetaData(info);
      setCharactersList(results);
    });
  }, [currentPage]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="charactersListPage">
      <CharactersList list={charactersList} />
      <ToTop />
      {isLoading ? (
        <TbLoader className="charactersListPage_loader"/>
        ) : (
        <button className="charactersListPage_load_more" onClick={addCharacters}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CharactersListPage;