import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './style.css';

axios.defaults.baseURL = 'https://api.project-kalian.rmecha.my.id';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).mount('#app');
