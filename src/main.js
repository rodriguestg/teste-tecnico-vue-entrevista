import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import PageProducts from './pages/Products.vue'
import Home from './pages/Home.vue';

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
    }
  ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');
