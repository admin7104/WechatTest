import {baseUrl} from './env'

export default async(url = '', data = {}, type = 'POST', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;
	let newData = data;
  newData.logintype = 'weixin';
  // newData = newData + ",'logintype':'weixin'";
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
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}
