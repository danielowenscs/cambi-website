import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import JoinForm from './components/JoinForm.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/joinus', component: JoinForm }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

