const home = () => import( /* webpackChunkName: "views/home" */ '@/views/home.vue')
const celebrity = () => import( /* webpackChunkName: "views/celebrity" */ '@/views/celebrity.vue')
const groupmass = () => import( /* webpackChunkName: "views/groupmass" */ '@/views/groupmass.vue')
const boothevent = () => import( /* webpackChunkName: "views/boothevent" */ '@/views/boothevent.vue')
const aboutus = () => import( /* webpackChunkName: "views/aboutus" */ '@/views/aboutus.vue')
const contactus = () => import( /* webpackChunkName: "views/contactus" */ '@/views/contactus.vue')

import Vue from 'vue'
import Router from 'vue-router'

const includPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return includPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const routerConfig = [{
        path: '/:lang',
        name: 'home',
        component: home
    },
    {
        path: '/:lang/celebrity',
        name: 'celebrity',
        component: celebrity
    },
    {
        path: '/:lang/groupmass',
        name: 'groupmass',
        component: groupmass
    },
    {
        path: '/:lang/boothevent',
        name: 'boothevent',
        component: boothevent
    },
    {
        path: '/:lang/aboutus',
        name: 'aboutus',
        component: aboutus
    },
    {
        path: '/:lang/contactus',
        name: 'contactus',
        component: contactus
    }
]

const router = new Router({
    routes: routerConfig
})

export default router;
