<template>
    <div class="content">
        <List>
            <Question-Card ></Question-Card>
        </List>
        <Hover-Button :is-visible="HBisVisible" v-directive="num" ></Hover-Button>
    </div>
</template>

<script>
    
    import List from '../components/List.vue'
    import ListLoading from '../components/ListLoading.vue'
    import QuestionCard from '../components/QuestionCard.vue'
    import HoverButton from '../components/HoverButton.vue'

    export default {
        // 这个函数比较早就触发了
        ready() { 

        },

        data() {
            return {
                LLisVisible: true,
                HBisVisible: true,
                num: 10
            }
        },
        
        components: {
            QuestionCard,
            HoverButton, 
            List
        },

        vuex: {
            getters: {
                userInfo: ({ userInfo }) => userInfo
            },
            actions: {
                
            }
        },

        directives: {
            'directive': {
                bind: function () {
                // 准备工作
                // 例如，添加事件处理器或只需要运行一次的高耗任务
                    console.log( 'bind' )
                },
                update: function (newValue, oldValue) {
                    // 值更新时的工作
                    // 也会以初始值为参数调用一次
                    console.log( 'upadte:', newValue );
                },
                unbind: function () {
                    // 清理工作
                    // 例如，删除 bind() 添加的事件监听器
                    cosnole.log( 'unbind' );
                }
            }
        },

        methods: {
            HoverButtonClick() {
                this.num = this.num === false;
                console.log( this );
            }
        }
    }
</script>
<style scoped>




</style>
