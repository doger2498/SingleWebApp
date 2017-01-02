<template>
    <div class="popup popup-login _popbg">
        <div class="content-block">
            <div class="row"  style="margin-left:0;margin-right:0;">
               <div class="col-sm-8 col-sm-offset-2 text _head_title">
                   <h1 class="_head_title"><strong>小灯泡</strong> ZTT</h1>
                   <div class="description _head_title">
                        <p>You say I'm wrong, but you'd better prove you're right.</p>
                   </div>
                </div>
            </div>
            
            <div class="row cover-row">
                <div class="col-sm-6 col-sm-offset-3 form-box">
                    <div class="tabs _bg">
                        <div id="tab1" class="tab active">
                            <div class="form-top">
                                <div class="form-top-left">
                                    <p>Enter your username and password to log on: </p>
                                    <a href="#tab2" class="tab-link _href">No account?</a>
                                </div>
                            </div>

                            <div class="content-block">
                                <div class="list-block">
                                    <ul class="_input_bg">
                                        <li class="_input_bg" >
                                            <div class="item-content _input_bg">
                                                <div class="item-media _input_bg"><i class="icon icon-form-name"></i></div>
                                                <div class="item-inner _input_bg">
                                                    <div class="item-title label _input_bg">邮箱账号：</div>
                                                    <div class="item-input _input_bg">
                                                        <input class="_input_bg" type="text" v-model="account" placeholder="Your name">
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item-content _input_bg">
                                                <div class="item-media _input_bg"><i class="icon icon-form-name"></i></div>
                                                <div class="item-inner _input_bg">
                                                    <div class="item-title label _input_bg">密码：</div>
                                                    <div class="item-input _input_bg">
                                                        <input class="_input_bg" @keyup.enter="clickLogin(loginData)" type="password" v-model="password" placeholder="Your password">
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content-block _btn ">
                                <a class="close-popup button button-fill button-danger _btnItem ">取消</a>
                                <a class="button button-fill button-success _btnItem _btnItemRight" @click="clickLogin(loginData)" >确认</a>
                            </div>
                        </div>
                        <div id="tab2" class="tab">
                            <div class="form-top">
                                <div class="form-top-left">
                                    <p>Enter your username and password to log on: </p>
                                    <a href="#tab1" class="tab-link _href">have account!</a>
                                </div>
                            </div>
                            <div class="content-block">
                                <div class="list-block">
                                    <ul class="_input_bg">
                                        <li>
                                            <div class="item-content _input_bg">
                                                <div class="item-media _input_bg"><i class="icon icon-form-name"></i></div>
                                                <div class="item-inner _input_bg">
                                                    <div class="item-title label _input_bg">注册邮箱：</div>
                                                    <div class="item-input _input_bg">
                                                        <input class="_input_bg" type="text" v-model="regAccount" placeholder="Your name">
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item-content">
                                                <div class="item-media"><i class="icon icon-form-name"></i></div>
                                                <div class="item-inner">
                                                    <div class="item-title label _input_bg">密码：</div>
                                                    <div class="item-input">
                                                        <input class="_input_bg"  type="password" v-model="regPassword"placeholder="Your password">
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item-content">
                                                <div class="item-media"><i class="icon icon-form-name"></i></div>
                                                <div class="item-inner">
                                                    <div class="item-title label _input_bg">确认密码：</div>
                                                    <div class="item-input">
                                                        <input class="_input_bg" @keyup.enter="clickReg(regData)" type="password" v-model="regConfirm" placeholder="Confirm">
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content-block _btn">
                                <a class="close-popup button button-fill button-danger _btnItem">取消</a>
                                <a @click="clickReg(regData)" class="button button-fill button-success _btnItem _btnItemRight">注册</a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { login, reg } from '../vuex/actions.js'
    import { getLoginState, getRegState } from '../vuex/getters.js'
    
    export default {
        data() {
            return{
                account: '',
                password: '',
                regAccount: '',
                regPassword: '',
                passwordConfirm: '',
            }
        },
        
        methods: {
            clickReg (regData){
                 if(regData.password === '') {
                    alert('密码不能为空')
                    return
                }
                if(regData.password !== regData.passwordConfirm) {
                    console.log( regData )
                    alert('密码不匹配')
                    return
                }
                if(!this._checkMail(regData.username)) {
                    alert('请输入正确的邮箱格式')
                    return
                }
                this.reg(regData);
            },
            clickLogin (loginData){
                if(loginData.password === '') {
                    alert('密码不能为空')
                    return
                }
                if(!this._checkMail(loginData.username)) {
                    alert('请输入正确的邮箱格式')
                    return
                }
                this.login(loginData);
            },
            _checkMail (email){
                var filter = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/; 
                return (filter.test(email))
            }
        },

        vuex: {
            getters: {
                loginState: ({loginState}) => loginState,
                regState: ({regState}) => regState 
            },
            actions: {
                login: login,
                reg: reg
            }
        },
        
        computed: {
            loginData() {
                return {
                    username: this.account,
                    password: this.password
                }
            },
            regData() {
                return {
                    username: this.regAccount,
                    password: this.regPassword,
                    passwordConfirm: this.regConfirm
                }
            }
        }
    }
</script>

<style scoped>
    ._content{
        border-radius: .2rem;
        background-color: rgba(200, 200, 200, 0.7);
        width: 17rem;
        margin: auto;
        margin-top: 5rem !important;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 12rem;
    }
    ._href{
        padding: 0 0 .5rem 0;
        display: block;
        margin-top: -.5rem;
    }

    ._btn{
        margin-top: 1rem !important;
        height: 2rem;
        line-height: 2rem !important;
        margin-bottom: 1rem;
       
    }
    ._btn a{ 
        height: 2rem;
        line-height: 2rem !important;
    }
    ._btnItem {
        width: 40%;
        float:left;
    }
    ._btnItemRight {
        float: right;
    }

    ._title {
        width: 100%;
        height: 4rem;
    }

    ._bg {
        background: #444;
        background: rgba(0, 0, 0, 0.35);
        -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px; border-radius: 4px 4px 4px 4px;
    }
    ._popbg {
        background:  no-repeat scroll  #444;
        background-color: rgba(0, 0, 0, 0.35);
        background: url(../img/loginBackground.jpg);
        background-size: cover;
    }
    ._li_bg {
        background: #444;
        background: rgba(0, 0, 0, 0.35);
    }
    ._input_bg {
        background-color: rgba(1,1,1,0) !important;
        border-color: rgba(1,1,1,0) !important;
        color: white;
        opacity: 0.9;
        font-weight: normal;
    }
    ._head_title{
        color: white;
        opacity: .8;
        text-align: center;
        font-weight: 300;
    }
    h1 {
        margin-top: 1rem !important;
    }
    p {
        font-weight: 200 !important;
    }
/**
* @ 重写
*/
    .item-inner{
        margin-left: 0 !important;
    }
    .content-block{
        margin-top: 0;
        margin-bottom: 0;
    }
    .list-block{
        margin-top: 0;
        margin-bottom: 0;
    }
    .tabs{
        padding-bottom: .5rem;
    }





.hidden {
  visibility: hidden;
  display: block !important;
  position: absolute;
  right: 0px;
  top: 10px;
  color: red;
}

.form-group {
  margin-bottom: 15px;
  position: relative;
}
button {
  position: relative;
}
.login-group {
  height: 130px;
}
.transition{
  -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

strong { font-weight: 500; }

a, a:hover, a:focus {
  cursor: pointer;
  color: #de615e;
  text-decoration: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
}
.cover-row{
  margin-left: 0;
  margin-right: 0;
}
h1, h2 {
  margin-top: 10px;
  font-size: 38px;
    font-weight: 100;
    color: #555;
    line-height: 50px;
}

h3 {
  font-size: 22px;
    font-weight: 300;
    color: #555;
    line-height: 30px;
}

img { max-width: 100%; }

::-moz-selection { background: #de615e; color: #fff; text-shadow: none; }
::selection { background: #de615e; color: #fff; text-shadow: none; }


.btn-link-1 {
  display: inline-block;
  height: 50px;
  margin: 5px;
  padding: 16px 20px 0 20px;
  background: #de615e;
  font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    color: #fff;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
}
.btn-link-1:hover, .btn-link-1:focus, .btn-link-1:active { outline: 0; opacity: 1; color: #fff; }

.btn-link-1.btn-link-1-facebook { background: #4862a3; }
.btn-link-1.btn-link-1-twitter { background: #55acee; }
.btn-link-1.btn-link-1-google-plus { background: #dd4b39; }

.btn-link-1 i {
  padding-right: 5px;
  vertical-align: middle;
  font-size: 20px;
  line-height: 20px;
}

.btn-link-2 {
  display: inline-block;
  height: 50px;
  margin: 5px;
  padding: 15px 20px 0 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
  font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    color: #fff;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
}
.btn-link-2:hover, .btn-link-2:focus, 
.btn-link-2:active, .btn-link-2:active:focus { outline: 0; opacity: 1; background: rgba(0, 0, 0, 0.3); color: #fff; }


/***** Top content *****/

.top-content .text {
  color: #fff;
}

.top-content .text h1 { color: #fff; }

.top-content .description {
  margin: 20px 0 10px 0;
}

.top-content .description p { opacity: 0.8; }

.top-content .description a {
  color: #fff;
}
.top-content .description a:hover, 
.top-content .description a:focus { border-bottom: 1px dotted #fff; }

.form-box {
  margin-top: 35px;
}

.form-top {
  overflow: hidden;
  text-align: left;
}

.form-top-left {
  float: left;
  width: 75%;
  padding-left:1rem;
}

.form-top-left h3 { margin-top: 0; color: #fff; }
.form-top-left p { opacity: 0.8; color: #fff; }

.form-top-right {
  float: left;
  width: 25%;
  padding-top: 5px;
  font-size: 66px;
  color: #fff;
  line-height: 100px;
  text-align: right;
  opacity: 0.3;
}

.form-bottom {
  padding: 25px 25px 30px 25px;
  background: #444;
  background: rgba(0, 0, 0, 0.3);
  -moz-border-radius: 0 0 4px 4px; -webkit-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px;
  text-align: left;
}

.form-bottom form textarea {
  height: 100px;
}

.form-bottom form button.btn {
  width: 100%;
}

.form-bottom form .input-error {
  border-color: #de615e;
}

.social-login {
  margin-top: 35px;
}

.social-login h3 {
  color: #fff;
}

.social-login-buttons {
  margin-top: 25px;
}


/***** Media queries *****/

@media (min-width: 992px) and (max-width: 1199px) {}

@media (min-width: 768px) and (max-width: 991px) {}

@media (max-width: 767px) {
  
  .inner-bg { padding: 60px 0 110px 0; }

}

@media (max-width: 415px) {
  
  h1, h2 { font-size: 32px; }

}


input[type="text"], 
input[type="password"], 
textarea, 
textarea.form-control {
  height: 50px;
    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #fff;
    border: 3px solid #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 50px;
    color: #888;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
}

textarea, 
textarea.form-control {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 30px;
}

input[type="text"]:focus, 
input[type="password"]:focus, 
textarea:focus, 
textarea.form-control:focus {
  outline: 0;
  background: #fff;
    border: 3px solid #fff;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
}

input[type="text"]:-moz-placeholder, input[type="password"]:-moz-placeholder, 
textarea:-moz-placeholder, textarea.form-control:-moz-placeholder { color: #888; }

input[type="text"]:-ms-input-placeholder, input[type="password"]:-ms-input-placeholder, 
textarea:-ms-input-placeholder, textarea.form-control:-ms-input-placeholder { color: #888; }

input[type="text"]::-webkit-input-placeholder, input[type="password"]::-webkit-input-placeholder, 
textarea::-webkit-input-placeholder, textarea.form-control::-webkit-input-placeholder { color: #888; }



button.btn {
  height: 50px;
    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #de615e;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 50px;
    color: #fff;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    text-shadow: none;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
}

button.btn:hover { outline:0; opacity: 1; color: #fff; }

button.btn:active { outline: 0; opacity: 1; color: #fff; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; }

button.btn:focus { outline: 0; opacity: 1; background: #de615e; color: #fff; }

button.btn:active:focus, button.btn.active:focus { outline: 0; opacity: 1; background: #de615e; color: black; }


</style>
