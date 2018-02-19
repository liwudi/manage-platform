/**
 * Created by mapbar_front on 2018/1/26.
 */
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userInfo: {
      userName: '李武帝',
      password: 123456
    },
    num: 0
  },
  mutations: {
    add: function (state) {
      state.num++
    },
    dec: function (state) {
      state.num--;
    }
  }
});

export default store
