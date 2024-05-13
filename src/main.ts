import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';


//views 
import Register from "./components/login/register/register.vue";
import HomeLogin from "./components/login/login/login.vue";
import Shop from "./components/shop/shopComponent.vue";
import BuyCar from "./components/carbuy/carbuy.vue";

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path : '/',
            name : 'home',
            component : HomeLogin,
        }, 
        {
            path : '/register',
            name : 'register',
            component : Register,
        },   
        {
            path : '/shop',
            name : 'shop',
            component : Shop,
        },  
        {
            path : '/buyCar',
            name : 'BuyCar',
            component : BuyCar,
        }, 
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app')
