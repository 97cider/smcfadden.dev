import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Intro from './pages/Intro.vue';
import Minimal from './pages/Minimal.vue';

const routes = [
  { path: '/', component: Intro },
  { path: '/Gallery', component: Minimal }
]

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
