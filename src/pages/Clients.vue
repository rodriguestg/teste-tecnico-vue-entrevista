<template>
  <ClientsList msg="Cadastro de Clientes" />
</template>

<script>
import ClientsList from '../components/ClientsList.vue'

export default {
  name: 'ClientsPage',
  components: {
    ClientsList
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
