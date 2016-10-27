
<template>
<div class="item-content">
    <div class="item-inner">
        <div class="item-title label _label">{{name}}</div>
        <div class="item-input _input">
            <input class="_inputText" type="text" v-model:value="value" :placeholder="name">
        </div>
    </div>
</div>
            
</template>

<script>
	import { updateAjaxParams } from '../vuex/actions.js'

    export default {
    	ready() {

    	},

        data() {
            return{
            }
        },

        props: ['name', 'key', 'value'],
        
        methods: {
        	update: function(){
        		this.updateAjaxParams({
        			key: this.key,
        			value: this.value
        		})
        	}
        },

        vuex: {
        	getters: {
        		isSend: ({ajax}) => ajax.type.isSend
            },
            actions: {
            	updateAjaxParams
            }
        },

        watch: {
        	key: 'update',
        	value: 'update'
        }
    }
</script>

<style scoped>
._label {
	width: 25% !important;
	font-size: .75rem;
}
._value {
	width: 75 !important;
}
._inputText {
	font-size: .75rem !important;
}
</style>
