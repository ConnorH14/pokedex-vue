import Axios from 'axios'
export const pokemonApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000
})
