import MobileDetect from '@/utils/mobile-detect.min'
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
    /*let sss = device_type.split(";");
     console.log(sss);
     let i = sss.contains("Build/");
     if (i > -1) {
     model = sss[i].substring(0, sss[i].indexOf("Build/"));
     }*/
  }
  model = md.mobile();
  /*if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log( position.coords.longitude );
        console.log( position.coords.latitude );
      },
      function (e) {
        throw(e.message);
      }
    )
  }else{
    console.log(222)
  }*/
  return os + "---" + model;//打印系统版本和手机型号
};
