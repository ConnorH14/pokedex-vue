<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Pokemon' }">
      <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
        <span class="mx-2 text-white">Pokemon</span>
      </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
