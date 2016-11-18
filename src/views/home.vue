<template>
    <div class="content">
        <List>
            <Question-Card ></Question-Card>
        </List>
        <!-- <List-Loading :is-visible="LLisVisible"></List-Loading> -->
        <Hover-Button :is-visible="HBisVisible"></Hover-Button>
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
                HBisVisible: true
            }
        },
        
        components: {
            QuestionCard,
            HoverButton, 
            List,
            ListLoading
        },

        vuex: {
            getters: {
                userInfo: ({ userInfo }) => userInfo,
                
            },
            actions: {
                
            }
        }
    }
</script>
<style scoped>




</style>
