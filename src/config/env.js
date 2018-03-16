/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl = 'http://test.zhcsjr.com:8280/weixin';
// let baseUrl = 'http://47.96.144.99:8080/appnew';
//let baseUrl = 'http://172.16.20.112:8080/appnew';
let routerMode = 'history';
let imgBaseUrl = '';
let success = '00000000';


if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){
  //let baseUrl = 'http://172.16.20.112:8080/appnew';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
  success
}
