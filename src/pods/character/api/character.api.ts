import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.data.find((c) => c.id === id);
    });
};
