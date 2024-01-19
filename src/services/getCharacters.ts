import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import {ICharacterResponse} from 'types/ICharacter';

const getCharacters = (): Promise<AxiosResponse<ICharacterResponse>> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character',
  };
  return axios.request(options);
};

export default getCharacters;