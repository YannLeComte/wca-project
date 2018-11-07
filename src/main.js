import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

/* API to get the questions */
axios.defaults.baseURL = 'https://opentdb.com';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  render: h => h(App),
}).$mount('#app');
