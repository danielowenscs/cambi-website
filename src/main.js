import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import JoinCambi from './views/JoinCambi.vue';
import ThankYou from './views/ThankYou.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/joinus', component: JoinCambi },
    { path: '/thankyou', component: ThankYou}
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

