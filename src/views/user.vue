<template>
    <div class=" list-block _list-block ">
        <ul>
            <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">头像</div>
                    <div class="item-after">XX</div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">昵称</div>
                    <div class="item-after">小灯泡</div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">账号</div>
                    <div class="item-after">15718890700</div>
                </div>
            </li>
             <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">密码</div>
                    <div class="item-after">15718890700</div>
                </div>
            </li>
             <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">邮箱</div>
                    <div class="item-after">15718890700</div>
                </div>
            </li>
        </ul>
    </div>
    <div class=" list-block _list-block">
        <ul>
            <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">性别</div>
                    <div class="item-after">XX</div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">地址</div>
                    <div class="item-after">小灯泡</div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">个性签名</div>
                    <div class="item-after">15718890700</div>
                </div>
            </li>
        </ul>
    </div>

    <div class=" list-block _list-block">
        <ul>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">关于</div>
                </div>
            </li>
        </ul>
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
._list-block{
    margin-top: 1rem;
    margin-bottom: 0rem;
}
</style>
