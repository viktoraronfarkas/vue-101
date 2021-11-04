import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Pokedex from './pages/Pokedex.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pokedex', component: Pokedex },

];

// Here we create our own Vue Router Instance
// and define the paths we can then use.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
