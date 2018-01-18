import Vue from 'vue';
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css

import App from './App'


Vue.use(Element, {
  size: 'medium'
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
