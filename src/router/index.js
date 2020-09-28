import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('../views/home/Home')
const Discovery = ()=>import('../views/discovery/Discavery')
const Shop = ()=>import('../views/shop/Shop')
const Profile = ()=>import('../views/profile/Profile')

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path: '/discovery',
        component: Discovery
    },
    {
        path: '/shop',
        component:Shop
    },
    {
        path: '/profile',
        component:Profile
    }
]

const router = new VueRouter({
    routes
})

export default router