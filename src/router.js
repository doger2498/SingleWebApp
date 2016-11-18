/**
* @ 路由规则
*/
export default function(router) {
	router.map({

		//welcome
        '/': {
        	name: 'welcome',
        	component: require('./views/welcome.vue')
        },
		
		// 首页
		'/home': {
			name:'home',
            component: require('./views/home.vue')
        },

        // 游戏
		'/game': {
			name:'game',
            component: require('./views/game.vue')
        },

        // 聊天
		'/message': {
			name:'message',
            component: require('./views/message.vue')
        },

        // 我的
		'/user': {
			name:'user',
            component: require('./views/user.vue')
        }
	});
}