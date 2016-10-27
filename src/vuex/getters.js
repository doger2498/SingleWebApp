/**
* @ 登录、注册
*/
const getLoginState = (state) => {
  	return state.loginState
}
const getRegState = (state) => {
  	return state.regState
}


/**
 * @ USER页面
*/
const getUserInfo = (state) => {
	console.log(state.userInfo) 
}

export { getLoginState, getRegState, getUserInfo }