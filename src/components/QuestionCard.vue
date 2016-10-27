<template>
    <div class="card">
        <div class="card-header card-content">
            <div class="list-block media-list">
                <div class="item-content">
                    <div class="item-media _item-media">
                        <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="30">
                    </div>
                    <div class="item-inner">
                        <div class="_nickName">{{nickName}}</div>
                        <div class="item-title-row">
                            <div class="_title">{{title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="list-block media-list">
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-subtitle _wrap _question">{{question}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <span>{{time}}</span>
            <span>{{comment}}</span>
        </div>
    </div>
</template>

<script>
export default {
    ready() {

    },

    data() {
        return {

        }
    },
    
    props: {
       nickName: '',
       title: '',
       question: '',
       time: '',
       comment: ''
    },
    computed: {

    }
}
</script>

<style scoped>

/**
 * @ 重写某些类
*/
.infinite-scroll > .list-block {
    margin: 0;
    margin-bottom: .5rem;
}
.list-container {
    background: inherit;
}
/**
 * @ 自己写的一些类
*/
.card-header {
    min-height: 0;
    padding: 0;
}
._wrap {
    white-space: normal;
}

._nickName {
    font-size: .25rem;
    color: rgba(25,25,25,0.8);
}
._title {
    font-size: .85rem;
    color: rgba(25,25,25,0.8);
}
._question {
    color: rgba(25,25,25,0.8);
}
._item-media {
    padding: .1rem 0 .1rem 0 !important;
}
</style>

