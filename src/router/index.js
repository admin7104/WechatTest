import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
/*产品显示*/
const invest = r => require.ensure([], () => r(require('../page/invest/invest')), 'invest');
const invest_detail = r => require.ensure([], () => r(require('../page/invest/invest_detail')), 'invest_detail');
const invest_list = r => require.ensure([], () => r(require('../page/account/children/invest_list')), 'invest_list');
const invest_item = r => require.ensure([], () => r(require('../page/account/children/invest_item')), 'invest_item');
/*账户操作*/
const account = r => require.ensure([], () => r(require('../page/account/account')), 'account');
const account_infos = r => require.ensure([], () => r(require('../page/account/children/account_infos')), 'account_infos');
const bind_bank = r => require.ensure([], () => r(require('../page/bank/bind_bank')), 'bind_bank');
const my_bank = r => require.ensure([], () => r(require('../page/bank/my_bank')), 'my_bank');
const bank_list = r => require.ensure([], () => r(require('../page/bank/bank_list')), 'bank_list');
const capital_details = r => require.ensure([], () => r(require('../page/account/children/capital_details')), 'capital_details');
const financial_coupon = r => require.ensure([], () => r(require('../page/account/children/financial_coupon')), 'financial_coupon');
const activity_page = r => require.ensure([], () => r(require('../page/account/children/activity_page')), 'activity_page');

const recharge = r => require.ensure([], () => r(require('../page/recharge_withdraw/recharge')), 'recharge');
const withdraw = r => require.ensure([], () => r(require('../page/recharge_withdraw/withdraw')), 'withdraw');

const login = r => require.ensure([], () => r(require('../page/entrance/login')), 'login');
const register = r => require.ensure([], () => r(require('../page/entrance/register')), 'register');

const alert_page = r => require.ensure([], () => r(require('../page/prompt/alert_page.vue')), 'alert_page');


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
      path:'/invest_list',
      component: invest_list
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
      path:'/account_infos',
      component: account_infos
    },
    {
      path:'/financial_coupon',
      component: financial_coupon
    },
    {
      path:'/activity_page',
      component: activity_page
    },
    {
      path:'/invest_item',
      component: invest_item
    },
    {
      path:'/my_bank',
      component: my_bank
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
      path:'/capital_details',
      component: capital_details
    },
    {
      path:'/recharge',
      component: recharge
    },
    {
      path:'/withdraw',
      component: withdraw
    },
    {
      path:'/login',
      component: login
    },
    {
      path:'/register',
      component: register
    },
    {
      path:'/alert_page',
      component: alert_page
    }
  ]
})
