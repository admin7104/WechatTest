# project-wexin

> 投资项目微信端----------开发中（代码更新）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
"# WechatTest" 

笔记
###axiox 发送post请求java后台一直不能接收到参数（2018/1/19）

```解决
this.$http.post('/api/app/common/isExistLoginName.ht',this.qs.stringify({params:JSON.stringify(obj)}),
    /*'/api/app/appFinancing/getFinancingProjectsList.ht',*/{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
}).then(function(response){
  console.log(response);
}).catch(function (err) {
  console.log(err);
});
```
