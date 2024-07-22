import constant from './constant'
import store from '../store'
import API from './apiService'
import axios from 'axios'
import * as types from '../store/mutation-types.js'
import { get } from 'lodash'

function isBlank(str = '') {
	if (str === null || str === undefined) return true;
	return /^\s*$/.test((str + ''));
}

function isNotBlank(str) {
	return !isBlank(str);
}

//取得url參數
function queryString(key) {
	let location = document.location.search;
	if (!location) location = window.top.location.search; //找parent
	return (location.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
}

function initMain(_vue) {
	setDefaultLanguage(_vue)
}

function setDefaultLanguage(_vue) {
    let result = /#\/(.*?)(\/|\?|$)/.exec(location.hash)
    let lang = result ? result[1] : null
	if (!lang) {
		lang = 'zh'
		_vue.$router.replace({ name: 'home', params: { lang: lang } })
	}
    store.commit(types.SET_LANGUAGE, lang)
	_vue.$i18n.locale = lang
}

//初始化動作，異步處理
function initAsync(resolve) {
	resolve(true) //TODO
}

function ready() {
	let readyPromise = new Promise(resolve => {
		initAsync(resolve);
	});
	return readyPromise;
}


function race(domians, protocol) {
	if (!protocol) protocol = location.protocol;
	if (domians.length == 1) return Promise.resolve(`${protocol}//${domians[0]}`); //只有一個domain就不ping
	let promiseList = [];
	_each(domians, domain => {
		let url = protocol + '//' + domain + '/ping.gif?v=' + Math.ceil(Math.random() * Math.pow(10, 10));
		promiseList.push(axios.create({ timeout: 2000 }).get(url));
	})
	return Promise.all(promiseList.map(p => {
		return p.then(
			val => Promise.reject(val),
			err => Promise.resolve(err)
		);
	})).then(
		errors => Promise.reject(errors),
		val => {
			let res = val.request.responseURL.substring(0, val.request.responseURL.lastIndexOf('/'));
			return Promise.resolve(res)
		}
	);
}

// param 如果是 string ， 其他屬性用默認配置
// param 也可以傳入{} ， 可指定其他屬（https://doc.vux.li/zh-CN/components/toast.html）
function toast(param) {
	let conf = {
		show: true,
		time: 1500,
		position: 'top',
		onShow: () => {},
		onHide: () => {},
	};
	if (typeof param == 'string') {
		conf.text = param;
	} else {
		_assignIn(conf, param);
	}
	store.commit(types.SET_TOAST, conf);
}

// param 如果是 string ， 其他屬性用默認配置
// param 也可以傳入{} ， 可指定其他屬（https://doc.vux.li/zh-CN/components/alert.html）
function alert(param) {
	let conf = {
		show: true,
		title: '温馨提示',
		onShow: () => {},
		onHide: () => {},
	};
	if (typeof param == 'string') {
		conf.content = param;
	} else {
		_assignIn(conf, param);
	}
	store.commit(types.SET_ALERT, conf);
}


export default {
	initMain,
	race,
	isNotBlank,
	isBlank,
	queryString,
	toast,
	alert,
	ready,
}
