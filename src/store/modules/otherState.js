import * as types from '../mutation-types.js'

const state = {
	alert: {
		title: '',
		content: '',
		buttonText: '',
		show: false,
		onShow: () => {},
		onHide: () => {}
	},
	toast: {
		text: '',
		show: false,
		time: 3000,
		position: 'top',
		width: '20rem',
		type: 'text',
		onShow: () => {},
		onHide: () => {},
	},
	language: null,
	menuItems: [
		{ id : 'menu1', menubg: 'menubg1', num: 0, routeName: 'celebrity', text: 'menu.text1', footerbg: 'footerbg1' },
		{ id : 'menu2', menubg: 'menubg2', num: 1, routeName: 'groupmass', text: 'menu.text2', footerbg: 'footerbg2' }, 
		{ id : 'menu3', menubg: 'menubg3', num: 2, routeName: 'boothevent', text: 'menu.text3', footerbg: 'footerbg3' },
		{ id : 'menu4', menubg: 'menubg4', num: 3, routeName: 'aboutus', text: 'menu.text4', footerbg: 'footerbg4' },
		{ id : 'menu5', menubg: 'menubg5', num: 4, routeName: 'contactus', text: 'menu.text5', footerbg: 'footerbg5' },
	],
	currentMenu: -1,
	langList: [
		{id: 'langCN', enName: 'cn', cnName: '简中' },
		{id: 'langZH', enName: 'zh', cnName: '繁中'},
		{id: 'langEN', enName: 'en', cnName: 'EN' }
	],
}

const getters = {
	toast: state => state.toast,
	alert: state => state.alert,
	language: state => state.language,
	menuItems: state => state.menuItems,
	currentMenu: state => state.currentMenu,
	langList: state => state.langList,
}

const actions = {

}

const mutations = {
	[types.SET_TOAST](state, value) {
		for (var key in state.toast) {
			if (value.hasOwnProperty(key)) state.toast[key] = value[key]
		}
	},
	[types.SET_ALERT](state, value) {
		for (var key in state.alert) {
			if (value.hasOwnProperty(key)) state.alert[key] = value[key]
		}
	},
	[types.SET_LANGUAGE](state, value) {
		state.language = value;
	},
	[types.SET_CURRENTMENU](state, value) {
		state.currentMenu = value
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
