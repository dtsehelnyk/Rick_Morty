import { BASE_URL } from './api';

export const getCharacters = async (rout) => {
  const request = await fetch(`${BASE_URL}${rout}`, {mode: 'cors'});

  return request.json();
}
