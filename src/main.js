import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import PageProducts from './pages/Products.vue'
import PageClients from './pages/Clients.vue'

// Vue.use(VueRouter);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/products',
      component: PageProducts,
    },
    {
      path: '/clients',
      component: PageClients,
    }
  ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');
