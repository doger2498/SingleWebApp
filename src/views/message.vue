<template>
    <div class="card ">
        <div class="card-header">user
        </div>
        <div class="card-content">
        <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
    </div>
    <Hover-Button isHidden="true"></Hover-Button>
</template>

<script>
    import HoverButton from '../components/HoverButton.vue'
    import ArticleCard from '../components/ArticleCard.vue'

    export default {
        
        ready (){
        	console.log('ready');
        },

        data(){
            return{
                
            }
        },
        
        components: {
            ArticleCard,
            HoverButton
        }
    }
</script>
<style lang="sass">
._card {
    margin-left: 0;
    margin-right: 0;
}
</style>
