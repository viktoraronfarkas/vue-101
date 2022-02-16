import { createApp } from 'vue';
import router from './lib/router';
import store from './lib/store';
import './assets/styles/main.css';
import './lib/calculator';

const app = createApp({});
app.use(router);
app.use(store);
app.mount('#app');
