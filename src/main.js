// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import store from '@/store/store';
import bFormSlider from 'vue-bootstrap-slider';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(bFormSlider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
