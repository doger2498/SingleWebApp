<template>
    <Article-card public-time="2016年六月" img-url="http://image.wufazhuce.com/Fi5UiyYdwTJM-XRAuEy9e_3ScdBk"article="文章内容" more="http://www.baidu.com"></Article-card>
    <Article-card public-time="2016年六月" img-url="http://image.wufazhuce.com/Fi5UiyYdwTJM-XRAuEy9e_3ScdBk"article="文章内容" more="http://www.baidu.com"></Article-card>
    <Article-card public-time="2016年六月" img-url="http://image.wufazhuce.com/Fi5UiyYdwTJM-XRAuEy9e_3ScdBk"article="文章内容" more="http://www.baidu.com"></Article-card>
</template>

<script>
    
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
            ArticleCard
        }
    }
</script>
<style lang="sass">

</style>
