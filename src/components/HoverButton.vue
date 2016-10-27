<template>
    <a :class="isVisible == 'true'? NoClass : hiddenClass">+</a>
</template>

<script>
export default {
    data() {
        return {
            hiddenClass: 'button _fixed button-danger _btn _transition _z-index hidden',
            NoClass: 'button _fixed button-danger _btn _transition _z-index',
        }
    },

    props: ['isVisible']
}
</script>
<style scoped>
._btn {
    width: 2rem;
    height: 2rem;
    border: 0px;
    border-radius: 100%;
    background-color: red;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    font-family: monospace;
}
._btn:active {
    background-color: green;
    color: white;

}
._fixed {
    position: fixed;
    bottom: 3rem;
    right: 1rem;
}
._transition {
    transition-property: all;
    transition-timing-function: ease-in;
    transition-duration: 0.2s;
}
.hidden {
    display: none;
}
._z-index {
    z-index: 9999;
}
</style>
