import Vue from 'vue';

import 'normalize.css/normalize.css'// A modern alternative to CSS resets



import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css

import App from './App';
//import router from './router'


Vue.use(ElementUi, {
  size: 'medium'
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
