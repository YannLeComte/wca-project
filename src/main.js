import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

/* API to get the questions */
axios.defaults.baseURL = 'https://opentdb.com';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
