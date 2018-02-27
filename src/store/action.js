import {
	GET_USERINFO,
	SAVE_ADDRESS
} from './mutation-types.js'

export default {

	async getUserInfo({
		commit,
		state
	}) {
		commit(GET_USERINFO, {user_id: getStore('user_id')})
	},

}
