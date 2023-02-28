<template>
  <RegistrationForm msg="Cadastro de Produtos" />
</template>

<script>
import RegistrationForm from '../components/ProductsList.vue'

export default {
  name: 'ProductsPage',
  components: {
    RegistrationForm
  }
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
