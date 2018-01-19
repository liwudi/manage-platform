import Vue from 'vue';

import 'normalize.css/normalize.css'// A modern alternative to CSS resets



import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/common.scss'; // global css

import App from './App';
import router from './router/router'


Vue.use(ElementUi, {
  size: 'medium'
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
