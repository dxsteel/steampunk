import data from './data.json'

const apiService = () => {

  return data;
  

  // return fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     const cleanData = data.results.map(character => {
  //       return {
  //         id: character.id,
  //         photo: character.image,
  //         name: character.name,
  //         specie: character.species,
  //         status: character.status,
  //         type: character.type,
  //         gender: character.gender,
  //         origin: character.origin.name,
  //       };
  //     });
  //     return cleanData;
  //   });
};
console.log(data);

export default apiService;