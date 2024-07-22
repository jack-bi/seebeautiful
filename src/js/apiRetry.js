import axios from 'axios'
import qs from 'qs'
import _includes from 'lodash/includes'
import _each from 'lodash/each'
import util from './util'

let protocol = window.COMMON_PROTOCOL||location.protocol;
//需要比較長時間的api method
const timeoutMap = {

}

function AjaxInfo(method, params) {
    this.id = util.getIdentity();
    this.index = 0;
    this.method = method;
    this.params = params;
    this.apiHost = getAPIHost(this.index);
    this.pingTimeout = window.TIME_OUT||2000;
    this.apiTimeout = window.TIME_OUT||2000;
    if(!window.API_DOMAINS_GROUP) this.apiTimeout = 30 * 1000; //兼容舊的，如果沒有retry機制
    if(timeoutMap[method]) this.apiTimeout = timeoutMap[method];
    createService(this);
}

function getAPIHost(groupIndex) {
    if(!window.API_DOMAINS_GROUP) return window.API_HOST||'';
    let theGroup = window.API_DOMAINS_GROUP[groupIndex];
    let ran = Math.floor(Math.random() * theGroup.length);
    return protocol + '//' + theGroup[ran];
}

function groupPing(domainList, timeout) {
    let result = [];
    _each(domainList, domain => {
        let service = axios.create({timeout: timeout});
        let imageUrl = protocol + '//' + domain + '/ping.gif?v=' + Math.ceil(Math.random() * Math.pow(10, 10));
        result.push(service.get(imageUrl));
    });
    return result;
}

function createService(info) {
    let params = info.params;
    let APIURL = '/zb-cloud/api/';
    let isLoading = false;
    if(params.hasOwnProperty('isLoading')) isLoading = params['isLoading'];
    let intercept = true;
    if(params.hasOwnProperty('intercept')) intercept = params['intercept'];

    // 顯示loading
    delete params.isLoading;
    // 是否攔截 response
    delete params.intercept;

    /*2018-08-27 CS66-08231202-831369#调用平台所有的api 都可以传。 多傳入 terminal參數
    1:pc-web
    3:Android app
    4:IOS
    7:后台新增
    8:html 5 (mobile)
    9:微信注册
    */
    params.terminal = 8;
    params.host = document.domain; //多傳入 host(當前域名)
    const DATA = {
        json: JSON.stringify({
            id: info.id,
            jsonrpc: '2.0',
            method: info.method,
            params: params
        })
    }

    info.data = DATA;
    info.path = APIURL;
    const SERVICE = axios.create({
        timeout: info.apiTimeout
    })

    SERVICE.interceptors.request.use((config) => {
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    SERVICE.interceptors.response.use(
        response => {
            const RES = response.data
            if(RES.error && intercept) {
              let code = RES.error.code;
              if(_includes(['2202', '2221'], code)) {
                RES.error.message = '您已在其他设备登陆, 请重新登陆';
              }
            }
            return Promise.resolve(RES)
        },
        error => {
            return doPing(info).catch(e => {
                if(e == 'done') util.alert('网路线路检测异常 请重试<br>' + info.id);
            });
        }
    )
    info.send = () => SERVICE.post(info.apiHost + info.path + info.method, qs.stringify(info.data));
}

function doPing(info) {
    info.pingTimeout = info.pingTimeout * 2;
    info.apiTimeout = info.apiTimeout * 2;
    let domainList = window.API_DOMAINS_GROUP[info.index++];
    if(!domainList) return Promise.reject('done');
    return new Promise(function(resolve, reject) {
        let errCount = 0,
            done = false;
        _each(domainList, domain => {
            let url = protocol + '//' + domain + '/ping.gif?v=' + Math.ceil(Math.random() * Math.pow(10, 10));
            const ajax = axios.create({
                timeout: info.pingTimeout
            })
            ajax(url).then(res => {
                if (done) return;
                done = true;
                createService(info);
                info.apiHost = protocol + '//' + domain;
                resolve(info.send())
            }).catch(e => {
                if(url.indexOf('ping') == -1) return;
                errCount++;
                if (errCount == domainList.length) reject('next');
            })
        });
    }).catch(e => {
        if(e == 'next') return doPing(info);
    });
}

export default {
    AjaxInfo
}
