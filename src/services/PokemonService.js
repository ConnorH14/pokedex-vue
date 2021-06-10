import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokemonApi } from './AxiosService'

class PokemonService {
  async getPokemon() {
    try {
      const res = await pokemonApi.get('/?offset=0&limit=151')
      logger.log(res.data.results)
      AppState.pokemon = res.data.results
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const pokemonService = new PokemonService()
