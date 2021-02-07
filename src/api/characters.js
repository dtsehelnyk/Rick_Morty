import { BASE_URL } from './api';

export const getCharacters = async (route) => {
  const request = await fetch(
    `${BASE_URL}${route}`,
    {mode: 'cors'}
  );

  return await request.json();
}
