<template>
    <div class="modal xdp-modal">
        <div class="content-block _background ">
            <div class="card _card ">
                <div class="card-content">
                    <div class="card-header _title">{{title}}</div>
                    <div class="card-content list-block">
                        <slot></slot>
                    </div>
                    <div class="card-footer row _no-margin ">
                        <p class="col-50 _no-margin"><a class="close-popup button button-fill button-danger _btn" @click="cancel()" >取消</a></p>
                        <p class="col-50 _no-margin"><a class="close-popup button button-fill button-success _btn" @click="confirm()" >确认</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ajax } from '../vuex/actions.js'
    
    export default {    
        ready() {
            // 初始化函数，在组件还没显示的时候，就已经加载好。（因为用的是SUI的动画，默认就加载只是没显示
        },

        data() {
            return{
                title: '修改框'
            }
        },
        
        methods: {
            confirm() {
                this.ajax()
                $.closeModal('.xdp-modal');
            },
            cancel() {
                $.closeModal('.xdp-modal');
            },
        },

        vuex: {
            getters: {
                isSend: ({ajax}) => ajax.type.isSend
            },
            actions: {
                ajax,
            }
        },

        watch: {
            isSend: function(){
                
            }
        }
    }
</script>

<style scoped>
._btn {
    height: 1.7rem;
    line-height: 1.7rem;
}
._no-margin {
    margin: 0;
}
._background {
    background-color: white;
    margin: 0;
    padding: 0;
}
._card {

}
._title {
    font-size: .65rem;
}
</style>
