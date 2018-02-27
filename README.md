# project-wexin

> 投资项目微信端----------开发中（代码更新）

## Build Setup

``` bash
# 安装依赖
npm install

# 服务器默认端口 localhost:8080（在config/index.js文件中修改）
npm run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
"# WechatTest" 

# 笔记
## axiox 发送post请求java后台一直不能接收到参数（2018/1/19）

```javascript
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

## fetch请求的封装（2018/2/27）
链接地址：http://gitbook.cn/books/59259168605df96adbb38ae6/index.html
```java
export default async(url = '', data = {}, type = 'POST', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;
	let newData = data;
  newData.logintype = 'weixin';
	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			method: type,
      mode: 'cors',
			headers: {
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8",
			},
		};

		if (type == 'POST') {
      let dataBuffJson = JSON.stringify(newData);
      let formdata = "params="+dataBuffJson;
			Object.defineProperty(requestConfig, 'body', {
				value: formdata
			})
		}
		try {
			const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      let data = responseJson;
      return data
		} catch (error) {
			throw new Error(error)
		}
	}
	else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
```
##请求调用
```javascript
export const login = (loginname,loginpwd) => fetch('/app/user/login.ht', {"loginname":loginname,"loginpwd":md5(loginpwd)});
```
##在vue中是使用
```javascript
async login () {
  this.userInfo =  await login(this.phone,this.password);
  if(this.userInfo.retcode=='00000000')
    this.RECORD_USERINFO(this.userInfo);//保存数据
}
```

## 全局数据的储存【mapState 通过扩展运算符将store.state.userInfo映射直接映射到当前Vue的this对象上】（2018/2/27）
```javascript
import {mapState,mapMutations} from 'vuex'

created(){
  this.INIT_USERINFO();
},
computed:{
  ...mapState([
    'userInfo',
  ]),
},
methods: {
  ...mapMutations([
    'INIT_USERINFO'
  ]),
}
```
