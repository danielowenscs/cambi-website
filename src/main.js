import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import JoinCambi from './views/JoinCambi.vue';
import ThankYou from './views/ThankYou.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/joinus', component: JoinCambi },
    { path: '/thankyou', component: ThankYou},
    { path: '/privacypolicy', component: PrivacyPolicy}
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
})

const app = createApp(App);
app.use(router);
app.mount('#app');


