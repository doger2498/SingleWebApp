<template >
	<!-- 多一行，多出0.9rem 初始值为3.1rem -->
    <div class="message">
        <div :class="type">
            <span class="nickName ">{{nickName}}</span>
            <span class="messageBody liner-red">{{message}}</span>
            <img class="avatar-icon" :src="avatar"></img>
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

		props: ['message', 'type', 'nickName', 'avatar']
	}
</script>
<style scoped>
.message {
    width: 100%;
    height: 3.8rem;
}
.nickName {
    position: absolute;
    top: -.7rem;
    font-size: .5rem;
    color: rgb(150,130,130);
}
.messageBody {
    border-radius: .2rem;
    position: absolute;
    padding: .1rem .2rem .1rem .2rem;
    font-size: .8rem;
    max-width: 10rem;
    line-height: 1.6rem;
}
.avatar-icon {
    width: 2.5rem;
    height: 2.5rem;
    background-size: cover;
    display: block;
    position: absolute;
    border-radius: .2rem;
}
.left {
    color: white;
    text-align: left;
    position: relative;
}
.right {
    color: white;
    text-align: right;
    position: relative;
}
.left > .messageBody {
    background-color: rgba(46, 79, 196, 0.85);
    left: 3.5rem;
    top: .6rem;
}
.right > .messageBody {
    background-color: rgba(9, 196, 46, 0.8);
    right: 3.5rem;
    top: .6rem;
}
.left > .avatar-icon {
    left: .5rem;
}
.right > .avatar-icon {
    right: .5rem;
}
.left > .nickName {
    left: .5rem;
    top: -.8rem;
}
.right > .nickName {
    right: .5rem;
    top: -.8rem;
}
/**
* @ 一些特效
*/ 
.liner-red{
    background: linear-gradient(to right, rgb(200,200,180), red);
}
.liner-green {
    background: linear-gradient(to right, rgba(9, 196, 46, 0.8), rgb(200,200,230));
}

</style>
