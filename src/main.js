// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUI from 'mint-ui'
import store from './store/'
import './config/rem'
import FastClick from 'fastclick'
import 'mint-ui/lib/style.css';
import '../static/common.css';
import '../static/animate.css';
import VueProgress from 'vue-progress-path'
import CustomShapes from './utils/custom_shapes'
import vnp from "vue-number-pwd"

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
Vue.config.productionTip = false;
Vue.use(mintUI);
Vue.use(VueProgress);
Vue.use(CustomShapes);
Vue.prototype.$ = $;
Vue.use(vnp);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
