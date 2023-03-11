import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => (store.router = markRaw(router)));

app.use(router);
app.use(pinia);

app.mount('#app');
