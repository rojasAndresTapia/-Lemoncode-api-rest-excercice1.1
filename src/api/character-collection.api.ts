import Axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const api = (pageNumber) =>
  Axios.get(`${apiUrl}/?page=${pageNumber}`).then((res) => res);
// };
