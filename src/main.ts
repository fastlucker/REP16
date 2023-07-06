import { createApp } from 'vue';
import App from './App.vue';
import i18n from "@/i18n";

import './assets/style/base.css';


const app = createApp(App);

app.use(i18n);
app.mount('#app');
