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
    <button class="btn btn-primary" type="button" v-bind:disabled="formValidation()"
      v-on:click="registerProduct()">Cadastrar</button>
  </form>
  <div class="container text-center" v-show="this.products.length > 0">
    <table class="table">
      <thead>
        <tr class="row align-items-center">
          <td class="col">Id</td>
          <td class="col">Nome</td>
          <td class="col">Ativo</td>
        </tr>
      </thead>
      <tbody>
        <tr class="row align-items-center" v-for="product in products" v-bind:key="product.id">
          <td class="col">{{ product.id }}</td>
          <td class="col">{{ product.nome }}</td>
          <td class="col">{{ product.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="col" v-show="this.products.length === 0">Não existem produtos</p>
</template>

<script>
import productsMock from '../components/dataMocks/products.mock'

export default {
  name: 'RegistrationForm',
  props: {
    msg: String
  },

  // created() {
  //   const dataProducts = JSON.parse(localStorage.getItem('products'));
  //   if (dataProducts) {
  //     this.products = dataProducts;
  //   }
  // },

  data() {
    return {
      products: [...productsMock],
      id: 3,
      nome: '',
      status: '',
    }
  },


  methods: {
    registerProduct() {

      this.products.push({
        id: this.id + 1,
        nome: this.nome,
        status: this.status,
      })

      const lastProduct = this.products.at(-1);
      this.id = lastProduct.id;

      this.nome = '';
      this.status = '';
    },

    // saveProducts() {
    //   localStorage.setItem('products', JSON.stringify([...this.products]))
    // },

    formValidation() {
      if (this.nome.length > 1 && this.status.length !== 0) {
        return false;
      } else {
        return true;
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
