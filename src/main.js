import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LastArticles from './components/LastArticles.vue';

const app = createApp(App);

const routes = [
    { path: '/home', component: LastArticles },
    { path: '/ultimos-articulos', component: LastArticles },
    { path: '/', component: LastArticles }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);

app.mount('#app');

