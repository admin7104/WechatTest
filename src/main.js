// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUI from 'mint-ui'
import store from './invest/'
import './utils/rem'
import md5 from 'js-md5';
import axios from 'axios'
import Qs from 'qs'
import FastClick from 'fastclick'
import 'mint-ui/lib/style.css';
import '../static/common.css';
import '../static/animate.css';
import $ from 'jquery'
import VueProgress from 'vue-progress-path'
import CustomShapes from './utils/custom_shapes'

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
Vue.prototype.md5 = md5;
Vue.prototype.qs = Qs;
Vue.prototype.$http = axios;

Vue.prototype.rootHttp = 'http://test.zhcsjr.com:8080/appnew';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
