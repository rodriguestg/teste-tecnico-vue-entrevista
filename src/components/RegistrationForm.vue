<template>
  <form class="form-group">
    <h1>{{ msg }}</h1>
    <label for="product-name" class="form-label">
      Nome do produto:
    </label>
    <input id="product-name" placeholder="Produto" name="Nome do Produto" class="form-control" v-model="nome" />
    <b></b>
    <label for="active" class="form-label">
      Ativo:
    </label>
    <select id="active" class="form-control" v-model="status">
      <option>Sim</option>
      <option>Não</option>
    </select>
    <button class="btn btn-primary" type="button" v-on:click="registerProduct()">Cadastrar</button>
  </form>
  <div v-show="this.products.length > 0">
    {{ this.products }}
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  props: {
    msg: String
  },
  data() {
    return {
      products: [
      ],
      nome: '',
      status: '',
    }
  },
  methods: {
    registerProduct() {

      this.products.push({
        nome: this.nome,
        status: this.status,
      })

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
