/**
 * Created by mapbar_front on 2018/1/19.
 */
import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/login/Login.vue';
import Register from '@/views/register/register.vue';
import Main from '@/views/main/Main.vue';

Vue.use(Router);


export const constantRouterMap = [
  { path:'/login', component:Login },
  { path:'/register', component:Register },
  { path:'/', component:Main },
  { path: '*', redirect: '/login' }
];

export default new Router({
  // mode: 'history', //后端支持可开
  routes: constantRouterMap
});
