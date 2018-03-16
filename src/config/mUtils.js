import MobileDetect from '@/utils/mobile-detect.min'
import {DES3} from '../plugins/DES3';
/**
 * 获取本地IP地址
 */
export const  getIp = (func) =>{
  let url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_='+Math.random();
  let ip = "";
  $.getJSON(url, function(data){
    // alert(data.Ip);
    ipaddress = data.Ip;
    func();
  });
};

let  p = function (s){
  return s < 10 ? '0' + s: s;
};

/**
 * 存储localStorage
 */
export const setStore = (name, value) => {
	if (!name) return;
	if (typeof value !== 'string') {
		value = JSON.stringify(value);
	}
	window.localStorage.setItem(name, value);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
};

/**
 * 页面到达底部，加载更多
 */
export const loadMore = (element, callback) => {
	let windowHeight = window.screen.height;
	let height;
	let setTop;
	let paddingBottom;
	let marginBottom;
    let requestFram;
    let oldScrollTop;

    document.body.addEventListener('scroll',() => {
       loadMore();
    }, false);
    //运动开始时获取元素 高度 和 offseTop, pading, margin
	element.addEventListener('touchstart',() => {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom = getStyle(element,'paddingBottom');
        marginBottom = getStyle(element,'marginBottom');
    },{passive: true});

    //运动过程中保持监听 scrollTop 的值判断是否到达底部
    element.addEventListener('touchmove',() => {
       loadMore();
    },{passive: true});

    //运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
    element.addEventListener('touchend',() => {
       	oldScrollTop = document.body.scrollTop;
       	moveEnd();
    },{passive: true});

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop !== oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                loadMore();
                moveEnd();
            }else{
            	cancelAnimationFrame(requestFram);
            	//为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
            	height = element.offsetHeight;
                loadMore();
            }
        })
    };

    const loadMore = () => {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    }
};

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
export const showBack = callback => {
    let requestFram;
    let oldScrollTop;

    document.addEventListener('scroll',() => {
       showBackFun();
    }, false);
    document.addEventListener('touchstart',() => {
       showBackFun();
    },{passive: true});

    document.addEventListener('touchmove',() => {
       showBackFun();
    },{passive: true});

    document.addEventListener('touchend',() => {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    },{passive: true});

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop !== oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                moveEnd();
            }else{
                cancelAnimationFrame(requestFram);
            }
            showBackFun();
        })
    };

    //判断是否达到目标点
    const showBackFun = () => {
        if (document.body.scrollTop > 500) {
            callback(true);
        }else{
            callback(false);
        }
    }
};


export const PhoneFormat = (phone)=>{
  const reg = /^(\d{3})(\d{4})(\d{4})$/;
  const matches = reg.exec(phone);
  return matches[1] + ' ' + matches[2] + ' ' + matches[3];
};

export const CardFormat = (cardnum)=>{
  const reg = /([\d]{4})([\d]{4})([\d]{4})([\d]{4})([\d]{0,})?/;
  const matches = reg.exec(cardnum);
  if(matches[5]===undefined){
    return matches[1] + ' ' + matches[2] + ' ' + matches[3]+ ' ' + matches[4];
  }else{
    return matches[1] + ' ' + matches[2] + ' ' + matches[3]+ ' ' + matches[4]+ ' ' + matches[5];
  }
};

export const formatDate=(formatStr) =>
{
  var formatStr = new Date(formatStr* 1000); // 如果时间戳是字符串，需要先转换一下
  var formatArr = [
    formatStr.getFullYear().toString(),
    p(formatStr.getMonth()+1).toString(),
    p(formatStr.getDate()).toString(),
    p(formatStr.getHours()).toString(),
    p(formatStr.getMinutes()).toString(),
    p(formatStr.getSeconds()).toString()
  ];
  let time_str =  [];
  for (let i=0; i<formatArr.length; i++)
  {
    time_str = time_str + formatArr[i];
  }
  return time_str;
};
export const pdeadlineType=(type) =>
{
  let pdeadlineType = "";
  type=="YEAR"?pdeadlineType="年":type=="MONTH"?pdeadlineType="个月":pdeadlineType="天";
  return pdeadlineType;
};

export const getPhone=()=>{
  let device_type = navigator.userAgent;//获取userAgent信息
  let md = new MobileDetect(device_type);//初始化mobile-detect
  let os = md.os();//获取系统
  let model = "";
  if (os == "iOS") {//ios系统的处理
    os = md.os() + md.version("iPhone");
  } else if (os == "AndroidOS") {//Android系统的处理
    os = md.os() + md.version("Android");
  }
  model = md.mobile();
  return os + "---" + model;//打印系统版本和手机型号
};

export const getBankImg = (bankShortName)=>{
  switch(bankShortName)
  {
    case"ABC":
      return require("../../static/images/bank/ABC.png");
    case"BC":
      return require("../../static/images/bank/BC.png");
    case"BCM":
      return require("../../static/images/bank/BCM.png");
    case"BOB":
      return require("../../static/images/bank/BOB.png");
    case"BRCB":
      return require("../../static/images/bank/BRCB.png");
    case"CBHB":
      return require("../../static/images/bank/CBHB.png");
    case"CCB":
      return require("../../static/images/bank/CCB.png");
    case"CEB":
      return require("../../static/images/bank/CEB.png");
    case"CIB":
      return require("../../static/images/bank/CIB.png");
    case"CITIC":
      return require("../../static/images/bank/CITIC.png");
    case"CMB":
      return require("../../static/images/bank/CMB.png");
    case"CMBC":
      return require("../../static/images/bank/CMBC.png");
    case"CZBANK":
      return require("../../static/images/bank/CZBANK.png");
    case"CZCB":
      return require("../../static/images/bank/CZCB.png");
    case"GDB":
      return require("../../static/images/bank/GDB.png");
    case"GZCB":
      return require("../../static/images/bank/GZCB.png");
    case"HSCB":
      return require("../../static/images/bank/HSCB.png");
    case"HXB":
      return require("../../static/images/bank/HXB.png");
    case"HZCB":
      return require("../../static/images/bank/HZCB.png");
    case"ICBC":
      return require("../../static/images/bank/ICBC.png");
    case"NBCB":
      return require("../../static/images/bank/NBCB.png");
    case"NJCB":
      return require("../../static/images/bank/NJCB.png");
    case"PAB":
      return require("../../static/images/bank/PAB.png");
    case"PSBC":
      return require("../../static/images/bank/PSBC.png");
    case"SDB":
      return require("../../static/images/bank/SDB.png");
    case"SDEBANK":
      return require("../../static/images/bank/SDEBANK.png");
    case"SHCB":
      return require("../../static/images/bank/SHCB.png");
    case"SPDB":
      return require("../../static/images/bank/SPDB.png");
    case"SRCB":
      return require("../../static/images/bank/SRCB.png");
    case"TJCB":
      return require("../../static/images/bank/TJCB.png");
    case"WZCB":
      return require("../../static/images/bank/WZCB.png");
  }
};
export const encrypt = (data)  =>{
  let encrypt_data = DES3.encrypt("G8%*@l1b",data);
  encrypt_data = encrypt_data.replace(/\+/g, "%2B");
  console.log(data,encrypt_data)
  return encrypt_data;
}
