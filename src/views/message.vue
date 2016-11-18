<template>
    <div class="chatArea content _content" v-if="show">
        <ul class="messages">
            <div  v-for="item in messages">
                <Message :type="item.type" :message="item.message" :nick-name="item.nickName" :avatar="item.avatar"></Message>
            </div>
        </ul>
    </div>
    <div class="toolbar-inner" v-if="toolbar">
        <img  :src="userInfo.avatar" class="avatar-icon"></img>
        <textarea class="xdp-message" placeholder="请输入……" v-model:value="message" @keyup.enter="sendMsg" ></textarea>
        <a class="xdp-link" @click="sendMsg">Send</a>
    </div>
</template>

<script>
    import Message from '../components/Message.vue'
    import config from '../../config.js'
    export default {
        
        ready (){
            var that = this;
            // 弹窗，选择昵称和avatar
            $.prompt('请输入一个昵称',
                function (value) {
                    that.userInfo.nickName = value;
                    // confirm
                    var modal = $.modal({
                        title: 'Awesome Photos?',
                        text: '请选择一个合适的图片作为头像',
                        afterText:  '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
                                        '<div class="swiper-pagination"></div>'+
                                        '<div class="swiper-wrapper">'+
                                            '<div class="swiper-slide"><img class="xdp-avatar" src="./img/avatar-1.png" style="display:block"></div>' +
                                            '<div class="swiper-slide"><img class="xdp-avatar" src="./img/avatar-2.png" style="display:block"></div>' +
                                            '<div class="swiper-slide"><img class="xdp-avatar" src="./img/avatar-3.png" style="display:block"></div>' + 
                                            '<div class="swiper-slide"><img class="xdp-avatar" src="./img/avatar-4.png" style="display:block"></div>' +
                                            '<div class="swiper-slide"><img class="xdp-avatar" src="./img/avatar-5.png" style="display:block"></div>' +
                                            '<div class="swiper-slide"><img class="xdp-avatar" src="./img/avatar-6.png" style="display:block"></div>' +
                                        '</div>'+
                                      '</div>',
                        buttons: [
                          
                            {
                                text: '确定',
                                bold: true,
                                onClick: function (value) {
                                    that.toolbar = true;
                                    that.joinChatRoom();
                                }
                            }
                        ]
                    });
                    $('.xdp-avatar').on('click',function(evt){
                        that.userInfo.avatar = evt.target.src;
                        $('.xdp-avatar').attr('class','xdp-avatar');
                        evt.target.className = "xdp-avatar xdp-active";
                    });
                },
                function (value) {
                    
                }
            );
        },

        data(){
            return{
                messages: [
                    {   
                        type: '',
                        nickName:'',
                        message: '',
                        avatar: '',
                        userId: ''
                    }
                ],
                userInfo: {
                    nickName: '',
                    avatar: '',
                    id: parseInt(Math.random()*1000000000, 10)
                },
                message: '',
                show: false,
                toolbar: false,
                ws: '',
                once: true
            }
        },

        methods: {
            joinChatRoom() {
                var that = this;
                this.ws = new WebSocket(config.WebSocket.url);
                this.ws.binaryType = "arraybuffer";
                this.ws.onmessage = function(evt){
                    if (that.once === true) {
                        that.once = false;
                        $.toast(evt.data);
                    }else {
                        
                        var ms = JSON.parse(evt.data)
                        // 判断是否是自己发送的： 
                        if (ms.userId == that.userInfo.id) {
                            ms.type = 'right';
                        }

                        // 判断是否是第一次发消息，顶替辣个
                        if(that.messages[0].type === '') {
                            that.messages[0] = ms;
                            that.show = true;
                            return;
                        }
                        that.messages.push(ms);
                    }
                }
                this.ws.onopen = function(evt){
                    
                }
                this.ws.onclose = function(evt){
                    console.log(evt)
                }
                this.ws.onerror = function(evt){
                    console.log(evt)
                }
            },
            sendMsg() {
                var msg = {
                    nickName: this.userInfo.nickName,
                    type: 'left',
                    message: this.message,
                    avatar: this.userInfo.avatar,
                    userId: this.userInfo.id
                }
                this.ws.send(JSON.stringify(msg));
                this.message = '';
            }
        },
        
        components: {
            Message
        }
    }
</script>
<style coped>
._content {
    padding-bottom: 2rem;
}
.chatArea {
    position: relative;
    min-height: 100%;
    margin: 0;
}
.messages {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    bottom: 2rem;
}
.swiper-slide {
    display: inline-block;
}
.xdp-avatar {
    width: 3rem;
    height: 3rem;
    padding: .25rem;
    margin: .25rem;
    background: linear-gradient(to right, rgb(200,200,180), red);
}
.xdp-active{
    background: linear-gradient(to right, rgba(9, 196, 46, 0.8), rgb(200,200,230));
}


.toolbar-inner {
    width: 100%;
    height: 2rem;
    position: fixed;
    background-color: rgb(230,230,230);
    border-top: 1px solid #c4c4c4;
    bottom: 2.5rem;
    padding: .2rem .6rem .2rem .6rem;
}
.toolbar-inner > .avatar-icon {
    display: inline-block !important;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: .4rem;
    margin-right: .6rem;
}
.toolbar-inner > textarea {
    display: inline-block !important;
    appearance: none;
    border: 1px solid #c8c8cd;
    background: #fff;
    border-radius: .5rem;
    box-shadow: none;
    display: block;
    padding: .3rem .5rem;
    width: 12rem;
    height: 1.6rem;
    font-size: .8rem;
    line-height: .8rem;
    resize: none;
    flex-shrink: 1;
}
.toolbar-inner > .xdp-link {
    display: inline-block !important;
    position: absolute;
    right: .6rem;
    width: 2rem;
    height: 1.6rem;
    line-height: 1.6rem;
    margin: 0;
}
</style>
