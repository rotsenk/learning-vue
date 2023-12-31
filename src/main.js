import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import BlogComponent from './components/BlogComponent.vue';
import FormComponent from './components/FormComponent.vue';
import PaginaComponent from './components/PaginaComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';

const app = createApp(App);

const routes = [
    { path: '/home', component: LastArticles },
    { path: '/ultimos-articulos', component: LastArticles },
    { path: '/blog', component: BlogComponent },
    { path: '/formulario', component: FormComponent },
    { path: '/pagina/:id?', name: 'pagina', component: PaginaComponent },
    { path: '/', component: LastArticles },
    { path: '/:catchAll(.*)', component: ErrorComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);

app.mount('#app');

