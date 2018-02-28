import fetch from '../config/fetch'
import {md5} from '../plugins/md5';
import {getSign,formatDate} from '../config/mUtils'


export const login = (loginname,loginpwd) => fetch('/app/user/login.ht', {"loginname":loginname,"loginpwd":md5(loginpwd)});
export const isExistLoginName = (loginname,streamid) => fetch('/app/common/isExistLoginName.ht ',{"loginname":loginname,"streamid":streamid});
export const register = (loginname,loginpwd,authcode,spreadcode,sequence) => fetch('/app/user/register.ht', {"loginname":loginname,"loginpwd":md5(loginpwd),"authcode":authcode,"promotioncode":'weixin',"tradecode":"USER_REGISTER","spreadcode":spreadcode,"sequence":sequence});
export const getAuthCode = (mobile,tradecode,streamid) => fetch('/app/common/getAuthCode.ht',{"mobile":mobile,"tradecode":tradecode,"streamid":streamid});
export const get_banner = () =>fetch('/app/conf/appBannerList.ht',{});
export const hot_projectlist = () =>fetch('/app/appFinancing/getIndexFinancingProjectsList.ht',{});

export const investlist = (proType,current_page) =>fetch('/app/appFinancing/getFinancingProjectsList.ht',{"proType":proType,"current_page":current_page,"pageSize":"10"});
export const myAccount = (sessionId) =>fetch('/app/appMyAccount/appMyAccountFund.ht',{"sessionId":sessionId});
export const myTender = (sessionId,current_page,queryType) =>fetch('/app/tenderProject/myTender.ht',{"sessionId":sessionId,"current_page":current_page,"pageSize":"10","queryType":queryType});
export const myTenderDetail = (sessionId,projectId) =>fetch('/app/appFinancing/getProjectDetail.ht',{"sessionId":sessionId,"projectId":projectId});
export const projectInvest = (current_page,pageSize,projectId) =>fetch('/app/appFinancing/showFinancingProjectInvestDetail.ht',{"current_page":current_page,"pageSize":"10","projectId":projectId});
export const myCoupon = (sessionId,current_page,giftType,pageSize,queryType,investAmount,projectId,projectType) =>fetch('/app/appUserGift/userGiftListAjax.ht',{"sessionId":sessionId,"current_page":current_page,"pageSize":pageSize,"giftType":giftType,"queryType":queryType,"investAmount":investAmount,"projectId":projectId,"projectType":projectType});
export const capitalRecode = (sessionId,current_page) =>fetch('/app/appMyAccount/appMyAccountFundRecord.ht',{"sessionId":sessionId,"current_page":current_page,"pageSize":"10"});

export const smsVerification = (sessionId,bankCardNo,bankCode,idNum,idName,phoneNo) =>fetch('/goldenpay/verified/smsVerification.ht',{"sessionid":sessionId,"bankCardNo":bankCardNo,"bankCode":bankCode,"idNum":idNum,"idName":idName,"phoneNo":phoneNo});
export const getBankSupportList = (sessionId,current_page) =>fetch('/app/bankCard/getBankSupportList.ht',{"sessionid":sessionId,"current_page":current_page,"pageSize":"10"});
export const getBankCardList = (sessionId) =>fetch('/app/bankCard/getBankCardList.ht',{"sessionid":sessionId});
export const smsVerificationConfirm = (bindCardId,verifyCode,sessionId,bankCardNo,citycode,bankCode,idNum,idName,phoneNo) =>fetch('/goldenpay/verified/smsVerificationConfirm.ht',{"bindCardId":bindCardId,"sessionid":sessionId,"verifyCode":verifyCode ,"bankCardNo":bankCardNo,"bankCode":bankCode,"citycode":citycode,"idNum":idNum,"idName":idName,"phoneNo":phoneNo});
export const rechargeFrontPreview = (sessionId) =>fetch('/app/paymentOrders/rechargeFrontPreview.ht',{"sessionId":sessionId});
export const rechargeFront = (sessionId,rechargeAmount,tradePasswordStr) =>fetch('/app/paymentOrders/rechargeFront.ht',{"sessionId":sessionId,"rechargeAmount":rechargeAmount,"tradePasswordStr":tradePasswordStr});
export const withdrawFrontPreview = (sessionId) =>fetch('/app/paymentOrders/withdrawPage.ht',{"sessionId":sessionId});
export const validWithdrawFeeMoney = (sessionId,withdrawAmount) =>fetch('/app/paymentOrders/validWithdrawFeeMoney.ht',{"sessionId":sessionId,"withdrawAmount":withdrawAmount});
export const withdrawFront = (sessionId,orderId,withdrawMoney,tradePasswordStr,poundgeMoney,preventMoney) =>fetch('/app/paymentOrders/withdrawFront.ht',{"sessionId":sessionId,"orderId":orderId,"withdrawMoney":withdrawMoney,"tradePasswordStr":tradePasswordStr,"poundgeMoney":poundgeMoney,"preventMoney":preventMoney});
export const appActivityList = (sessionId,current_page) =>fetch('/app/activity/appActivityList.ht',{"sessionId":sessionId,"current_page":current_page,"pageSize":"10"});
export const changeLoginPassword = (sessionId,oldloginpwd,newloginpwd) =>fetch('/app/user/modifyLoginPwd.ht',{"sessionid":sessionId,"oldloginpwd":md5(oldloginpwd),"newloginpwd":md5(newloginpwd)});
export const changeTraderPassword = (sessionId,oldpaypwd,newpaypwd) =>fetch('/app/user/modifyPayPwd.ht',{"sessionid":sessionId,"oldpaypwd":oldpaypwd,"newpaypwd":newpaypwd});
export const forgetLoginPassword = (loginname,authcode,loginpwd) =>fetch('/app/user/resetLoginPwd.ht',{"loginname":loginname,"authcode":authcode,"tradecode":"FORGET_PAY_PASSWD","loginpwd":loginpwd});
export const forgetTraderPassword = (sessionid,loginname,authcode,paypwd) =>fetch('/app/user/resetPayPwd.ht',{"sessionid":sessionid,"loginname":loginname,"authcode":authcode,"tradecode":"FORGET_PAY_PASSWD","paypwd":paypwd});
export const myPayAccount = (sessionid) =>fetch('/app/user/myPayAccount.ht',{"sessionId":sessionid});
export const investLoan = (sessionId,platformType,investAmount,projectId,tradePasswordStr,userGiftIds,userRaiseId) => fetch('/app/paymentOrders/investLoan.ht',{"sessionId":sessionId,"platformType":platformType,"investAmout":investAmount,"projectId":projectId,"tradePasswordStr":tradePasswordStr,"userGiftIds":userGiftIds,"userRaiseId":userRaiseId});

export const getPurchasedProjectDetail = (sessionId,projectId) => fetch('/app/appFinancing/getPurchasedProjectDetail.ht',{"sessionId":sessionId,"projectId":projectId});
