require('./initialize-cordova')


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

var example  = Vue.component('example', require('./components/Example.vue'));
var login    = Vue.component('login', require('./components/Login.vue'));
var register = Vue.component('register', require('./components/Register.vue'));
var home = Vue.component('home', require('./components/Home.vue'));
var reset = Vue.component('reset', require('./components/ResetPassword.vue'));

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: login },
        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/example', component: example },
        { path: '/home', component: home },
        { path: '/resetpassword', component: reset },
    ]
})

const app = new Vue({
    router,
    el: '#app'
});