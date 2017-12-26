import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const invest_detail = r => require.ensure([], () => r(require('../page/invest/invest_detail')), 'invest_detail');


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: home
    },
    {
      path:'/invest_detail',
      component: invest_detail
    }
  ]
})
