import Home from './home.js'
import Prodotti from './prodotti.js'
import Floss from './floss.js'
import Assistenza from './assistenza.js'
import ChiSiamo from './chisiamo.js'
import Privacy from './privacy.js'

const { createApp } = Vue;


const routes = [
    { path: '/', component: Home },
    { path: '/prodotti', component: Prodotti },
    { path: '/software', component: Floss },
    { path: '/assistenza', component: Assistenza },
    { path: '/chisiamo', component: ChiSiamo },
    { path: '/privacy', component: Privacy },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
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
