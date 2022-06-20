const API_URL = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const URL = id ? `${API_URL}${id}` : API_URL;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

export default getData;
