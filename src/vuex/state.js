/**
 * @ 全局对象都保存这里
*/
const state = {
    
	/**
 	 * @ 登录、注册
	*/
    loginState: false,
    regState: false,
    
    /**
 	 * @ USER页面
	*/
    userInfo: {},

    /**
 	 * @ 子组件AJAX
	*/
	ajax: {
		params: {},
		type: {
			/**
			 * @ isSend 类似于脉搏，跳动 true -> false -> true 为一个循环，第一次跳动，各个input子组件提交params，第二次跳动父组件发送ajax
			*/
			isSend: false
		}
	},

	/**
 	 * @ 主页
	*/
	questionList: {
		// 主要数据
		data: [],
		params: {
			url: '',
			params: ''
		}
	}
}

export default state