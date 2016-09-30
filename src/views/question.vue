<template>
    <div class="card ">
        <div class="card-header">新的公布:</div>
            <div class="card-content">
                <div class="list-block media-list">
                    <div class="item-content">
                        <div class="item-media">
                            <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44">
                        </div>
                    <div class="item-inner">
                        <div class="item-title-row">
                            <div class="item-title">标题</div>
                        </div>
                        <div class="item-subtitle">子标题</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <span>2015/01/15</span>
            <span>5 评论</span>
        </div>
    </div>
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
._card {
    margin-left: 0;
    margin-right: 0;
} 
</style>
