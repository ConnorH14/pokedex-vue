<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-lg-3 d-flex justify-content-center">
        <Pokedex />
      </div>
      <div class="col-lg-6 d-flex justify-content-center">
        <p>Pokemon View</p>
      </div>
      <div class="col-lg-3 d-flex justify-content-center">
        <p>My pokemon</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Pokedex from '../components/Pokedex.vue'
import { pokemonService } from '../services/PokemonService'
export default {
  components: { Pokedex },
  name: 'Pokemon',
  setup() {
    onMounted(async() => {
      try {
        pokemonService.getPokemon()
      } catch (error) {
        throw new Error(error)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
