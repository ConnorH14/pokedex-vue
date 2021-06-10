<template>
  <div class="card">
    <div class="card-body">
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'

export default {
  props: { pokemon: { type: Object, required: true } },
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style scoped>

</style>
