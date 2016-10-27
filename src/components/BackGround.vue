<template>
	<div v-show="open" class="bg">
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: false
		}
	}
}

</script>

<style scoped>
.bg {
	width: 100%;
	height: 100%;
	-webkit-filter: blur(10px);
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
            filter: blur(10px);
    z-index: 999;
    position: absolute;
    background-color: rgba(150,150,150,0.3);
}
</style>
