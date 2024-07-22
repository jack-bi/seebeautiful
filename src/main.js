import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import '@/icons'
import i18n from '@/lang'
import '@/style/reset.css' /*引入公共样式*/
import plugin from '@/plugin'
Vue.use(plugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
	store,
	i18n
})
