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

        // 问答
		'/question': {
			name:'question',
            component: require('./views/question.vue')
        },

        // 私信
		'/message': {
			name:'home',
            component: require('./views/message.vue')
        },

        // 我的
		'/user': {
			name:'user',
            component: require('./views/user.vue')
        },

        // button
        '/btn': {
            name:'btn',
            component: require('./components/HoverButton.vue')
        }
	});
}