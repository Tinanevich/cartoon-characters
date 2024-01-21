import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import {ICharacterResponse} from 'types/ICharacter';

const getCharacters = (url:string): Promise<AxiosResponse<ICharacterResponse>> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: url
  };
  return axios.request(options);
};

export default getCharacters;