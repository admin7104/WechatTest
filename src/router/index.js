import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const invest_detail = r => require.ensure([], () => r(require('../page/invest/invest_detail')), 'invest_detail');
const invest = r => require.ensure([], () => r(require('../page/invest/invest')), 'invest');
const account = r => require.ensure([], () => r(require('../page/account/account')), 'account');
const account_infos = r => require.ensure([], () => r(require('../page/account/children/account_infos')), 'account_infos');
const invest_list = r => require.ensure([], () => r(require('../page/account/children/invest_list')), 'invest_list');
const invest_item = r => require.ensure([], () => r(require('../page/account/children/invest_item')), 'invest_item');
const bind_bank = r => require.ensure([], () => r(require('../page/bank/bind_bank')), 'bind_bank');
const bank_list = r => require.ensure([], () => r(require('../page/bank/bank_list')), 'bank_list');
const recharge = r => require.ensure([], () => r(require('../page/recharge_withdraw/recharge')), 'recharge');
const withdraw = r => require.ensure([], () => r(require('../page/recharge_withdraw/withdraw')), 'withdraw');


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
    },
    {
      path:'/invest',
      component: invest
    },
    {
      path:'/account',
      component: account
    },
    {
      path:'/account_infos',
      component: account_infos
    },
    {
      path:'/invest_list',
      component: invest_list
    },
    {
      path:'/invest_item',
      component: invest_item
    },
    {
      path:'/bind_bank',
      component: bind_bank
    },
    {
      path:'/bank_list',
      component: bank_list
    },
    {
      path:'/recharge',
      component: recharge
    },
    {
      path:'/withdraw',
      component: withdraw
    }
  ]
})
