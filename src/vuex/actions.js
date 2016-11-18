/**
 * @ 登录、注册
*/
export const login = function ({dispatch, state}, data) {
	dispatch('LOGIN',data)
}
export const reg = function ({dispatch, state}, data) {
	dispatch('REG',data)
}


/**
 * @ USER页面
*/
export const getUserInfo = function ({dispatch, state}, data) {
	dispatch('GETUSERINFO',data)
}


/**
 * @ 组件
*/

// 1、ajax请求确认发送
export const ajax = function ({dispatch, state}, data) {
	dispatch('AJAX')
}

// 2、更新ajax参数
export const updateAjaxParams = function ({dispatch, state}, data) {
	dispatch('UPDATEAJAXPARAMS', data)
}

// 3、清空ajax参数
export const clearUpAjaxParams = function ({dispatch, state}, data) {
	dispatch('CLEARUPAJAXPARAMS', data)
}


/**
 * @ 主页
*/

export const loadNextPage = function ({dispatch, state}, data) {
	dispatch('LOADNEXTPAGE', data)
}
