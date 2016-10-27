import vue from 'vue'
import config from '../../config.js'

/**
 * @ mutations 对象包含具体的方法
*/
const mutations = {

    /**
     * @ 共享状态
    */
 
  	// 登录
	LOGIN(state, data) {
    vue.http({
        url: config.remoteServer.baseUrl + 'login',
        method: 'get',
        params: data,
      }).then((result) => {
      });
  		
  	},

  	// 注册
  	REG(state, data) {
  		vue.http({
  			url: config.remoteServer.baseUrl + 'reg',
  			method: 'get',
  			params: data,
  		}).then((result) => {
  		});
  	},


    /**
     * @ USER页面相关
    */

    // 获取用户信息
    GETUSERINFO(state, data) {
        var params = {}
        if(data === 'forceRefresh') {
            params.random = Math.random();
        }else {
            params.random = 0;
        }
        vue.http({
            url: config.remoteServer.baseUrl + 'getUserInfo/',
            method: 'get',
            params: params,
        }).then((result) => {
            state.userInfo = result.data
        });
    },


    /**
     * @ 子组件AJAX参数
    */  

    // 更新ajaxParams参数
    UPDATEAJAXPARAMS(state, data) {
        console.log(data)
        var key = data.key;
        var value = data.value
        state.ajax.params[key] = value;
    },

    // 更新ajax请求信号
    AJAX(state) {
        state.ajax.type.isSend = !state.ajax.type.isSend
    },

    // 清空ajax参数
    CLEARUPAJAXPARAMS(state, data) {
        state.ajax.params = {};
    }
}

export default mutations



