import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './language'
import {pinia} from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'

import '@fortawesome/fontawesome-free/css/all.css'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount('#app');
