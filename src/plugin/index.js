import { truncate } from 'lodash'
import util from '@/js/util'
export default {
	install(Vue, options) {
		//filter
		Vue.filter('truncate', (value, length) => {
			return truncate(value, { length })
		})

		//mixin
		Vue.mixin({

		})

		Vue.prototype.$util = util
		Vue.prototype.$cdn = window.CDN_PATH
		Vue.prototype.$upload = window.UPLOAD_HOST
	}
}
