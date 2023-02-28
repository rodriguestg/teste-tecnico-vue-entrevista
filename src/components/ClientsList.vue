<template>
  <form class="form-group">
    <h1>{{ msg }}</h1>
    <label for="client-name" class="form-label">
      Nome
    </label>
    <input id="client-name" placeholder="Nome" name="Nome do Cliente" class="form-control" v-model="nome" />
    <label for="phone" class="form-label">
      Documento
    </label>
    <input id="phone" placeholder="Documento" name="Documento" class="form-control" v-model="documento" />
    <label for="document-user" class="form-label">
      Telefone
    </label>
    <input id="document-user" placeholder="Telefone" name="Telefone" class="form-control" v-model="telefone" />
    <label for="email" class="form-label">
      E-mail
    </label>
    <input id="email" placeholder="E-mail" name="E-mail" class="form-control" v-model="email" />
    <b></b>
    <label for="active" class="form-label">
      Ativo:
    </label>
    <select id="active" class="form-control" v-model="status">
      <option>Sim</option>
      <option>Não</option>
    </select>
    <button class="btn btn-primary" type="button" v-bind:disabled="formValidation()"
      v-on:click="registerClient()">Cadastrar</button>
  </form>
  <div class="container text-center" v-show="this.clients.length > 0">
    <table class="table">
      <thead>
        <tr class="row align-items-center">
          <td class="col">Id</td>
          <td class="col">Nome</td>
          <td class="col">Documento</td>
          <td class="col">Telefone</td>
          <td class="col">E-mail</td>
          <td class="col">Ativo</td>
        </tr>
      </thead>
      <tbody>
        <tr class="row align-items-center" v-for="client in clients" v-bind:key="client.id">
          <td class="col">{{ client.id }}</td>
          <td class="col">{{ client.nome }}</td>
          <td class="col">{{ client.documento }}</td>
          <td class="col">{{ client.telefone }}</td>
          <td class="col">{{ client.email }}</td>
          <td class="col">{{ client.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="col" v-show="this.clients.length === 0">Não existem clientes</p>
</template>

<script>
import clientsMock from './dataMocks/clients.mock'

export default {
  name: 'ClientsList',
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
      clients: [...clientsMock],
      id: 3,
      nome: '',
      documento: '',
      telefone: '',
      email: '',
      status: '',
    }
  },


  methods: {
    registerClient() {

      this.clients.push({
        id: this.id + 1,
        nome: this.nome,
        documento: this.documento,
        telefone: this.telefone,
        email: this.email,
        status: this.status,
      })

      const lastProduct = this.clients.at(-1);
      this.id = lastProduct.id;

      this.nome = '';
      this.documento = '';
      this.telefone = '';
      this.email = '';
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
