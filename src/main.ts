import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/custom.scss';

import vutify from "@/vuetify";

createApp(App).use(router).use(vutify).mount('#app');
