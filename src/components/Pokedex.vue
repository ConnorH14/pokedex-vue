<template>
  <div>
    <Pokemon v-for="p in pokemon" :key="p.name" :pokemon="p" />
  </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      pokemon: computed(() => AppState.pokemon)
    }
  }
}
</script>

<style scoped>

</style>
