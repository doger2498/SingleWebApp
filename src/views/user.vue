<template>
    <div class="card list-block _list-block  _first-card">
        <ul>
            <li class="item-content" @click="popup('头像', 'avatar', userInfo.avatar)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">头像</div>
                    <img class="item-after" :src="userInfo.avatar"></img>
                </div>
            </li>
            <li class="item-content" @click="popup('昵称', 'nickName', userInfo.nickName)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">昵称</div>
                    <div class="item-after">{{userInfo.nickName}}</div>
                </div>
            </li>
            <li class="item-content" @click="popup('账号', 'loginName', userInfo.account)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">账号</div>
                    <div class="item-after">{{userInfo.account}}</div>
                </div>
            </li>
             <li class="item-content" @click="popup('密码', 'pass', userInfo.password)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">密码</div>
                    <div class="item-after">{{userInfo.password}}</div>
                </div>
            </li>
             <li class="item-content" @click="popup('邮箱', 'email', userInfo.email)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">邮箱</div>
                    <div class="item-after">{{userInfo.email}}</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="card list-block _list-block">
        <ul>
            <li class="item-content" @click="popup('性别', 'sex', userInfo.sex)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">性别</div>
                    <div class="item-after">{{userInfo.sex}}</div>
                </div>
            </li>
            <li class="item-content" @click="popup('地址', 'address', userInfo.address)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">地址</div>
                    <div class="item-after">{{userInfo.address}}</div>
                </div>
            </li>
            <li class="item-content" @click="popup('个性签名', 'desc', userInfo.desc)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">个性签名</div>
                    <div class="item-after">{{userInfo.desc}}</div>
                </div>
            </li>
        </ul>
    </div>

    <div class=" card list-block _list-block ">
        <ul>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <a class="item-inner" href="http://www.baidu.com">
                    <div class="item-title">关于</div>
                </a>
            </li>
        </ul>
    </div>
</div>

<Modal>
    <Modal-input :name="name" :key="key" :value="value"></Modal-input>
</Modal>
<Login></Login>
</template>

<script>
    import config from '../../config.js'
    import Modal from '../components/Modal.vue'
    import ModalInput from '../components/ModalInput.vue'
    import Login from '../components/Login.vue'
    import ArticleCard from '../components/ArticleCard.vue'
    import { getUserInfo, clearUpAjaxParams} from '../vuex/actions.js'

    export default {
        ready() {
            this.getUserInfo();
            console.log(this);
        },

        data(){
            return{
                // 传给Modal组件的参数
                key: undefined,
                value: undefined,
                name: undefined
            }
        },

        methods: {
            /**
             * @ 如果 name、key、value这些字段没有变化，则value不会刷新，那么也就不会传给model-input
            */
            popup: function(name, key, value) {
                this.name = name;
                this.key =  key;
                this.value = value || '';
                $.openModal('.modal');
            }
        },
        
        components: {
            ArticleCard,
            Login,
            Modal,
            ModalInput
        },

        vuex: {
            getters: {
                userInfo: ({ userInfo }) => userInfo,
                ajaxParams: ({ajax}) => ajax.params,
                isSend: ({ajax}) => ajax.type.isSend
            },
            actions: {
                getUserInfo: getUserInfo,
                clearUpAjaxParams: clearUpAjaxParams
            }
        },

        watch: {
            isSend: function(){
                // 处理ajax请求
                var query = '';
                for( var item in this.ajaxParams) {
                    query += item
                    query += '=' + this.ajaxParams[item] + '&'
                }
                query = query.split('').slice(0,query.length-1).join('');
                this.$http({
                    url: config.remoteServer.baseUrl + 'changeUserInfo/?' + query,
                    method: 'get'
                }).then((result) => {
                    if(result.data.status !== 'success') 
                        return 
                    this.getUserInfo('forceRefresh');
                })
                // 清空ajax参数
                this.clearUpAjaxParams();
                // 更改状态为false，PS：在一个回调函数内更新isSend的值，其他watch会失效
            },
            userInfo: function() {
                if(this.userInfo.status == 'NotLogin') {
                    $.popup('.popup-login');
                }
            }
        }
    }
</script>
<style coped>
._list-block{
    margin-top: 1rem;
    margin-bottom: 0rem;
}
._first-card{
    margin-top: .5rem;
}

</style>
