const BASE_URL = 'https://akabab.github.io/superhero-api/api/all.json';

export const fetchAllHeroes = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Error obteniendo héroes');
  return await res.json();
};