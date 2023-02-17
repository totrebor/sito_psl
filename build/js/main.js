import Home from './home.js'
import Prodotti from './prodotti.js'
import Floss from './floss.js'
import Assistenza from './assistenza.js'
import ChiSiamo from './chisiamo.js'
import Privacy from './privacy.js'
import NotFound from './notfound.js'


const { createApp } = Vue;


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/index.html',  redirect: { name: 'home' } },
    { path: '/prodotti', component: Prodotti },
    { path: '/software', component: Floss },
    { path: '/assistenza', component: Assistenza },
    { path: '/chisiamo', component: ChiSiamo },
    { path: '/privacy', component: Privacy },
    { path: '/:pathMatch(.*)', redirect: { name: 'home' } },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({
    data() {
        return {
        };
    },
});

app.use(router);


const mountedApp = app.mount("#app");
