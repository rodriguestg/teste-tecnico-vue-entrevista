<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <nav>
        <ul class="btn-group">
          <router-link class="btn btn-primary" to="/">Página Inicial </router-link>
          <router-link class="btn btn-primary" to="/products">Clientes </router-link>
          <router-link class="btn btn-primary" to="/products">Produtos </router-link>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
