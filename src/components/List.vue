<template >
	<div v-for="item in list" >
    	<div class="list-block _margin">
        	<ul class="list-container">
				<slot ></slot>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},

		ready() {
			
		},

		vuex: {
			getters: {
				list: ({questionList}) => questionList.data
			},
			actions: {

			}
		}
	}
</script>
<style scoped>

/**
 * @ 重写某些类
*/

.list-container {
    background: inherit;
}

/**
 * @ 某些属性
*/
._margin {
	margin: 0 0 .5rem 0;
}
</style>
