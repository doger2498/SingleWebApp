<template>
	<div class="card demo-card-header-pic">
	    <div valign="bottom" class="card-header color-white no-border no-padding">
	     	<img class='card-cover' v-bind:src="imgUrl" alt="">
	    </div>
	    <div class="card-content">
	      	<div class="card-content-inner">
	        	<p class="color-gray" v-text="publicTime"></p>
	        	<p v-text="article"></p>
	      	</div>
	    </div>
	    <div class="card-footer">
	      	<a href="#" class="link">赞</a>
	      	<a :href="more" class="link">更多</a>
	    </div>
	</div> 
</template>

<script>
export default {

	props: {
		article: '',
		publicTime: '',
		label: '',
		more: '',
		imgUrl: ''
	},
	computed: {

	}
}
</script>

<style scoped>
.imgSize {
	width: 100%;
	height: 4rem;
}

</style>