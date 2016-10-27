<template>
<nav class="bar bar-tab _z-index">
  <slot></slot>
</nav>
</template>

<style scoped>
.tab-item.active {
  color:  #ed8e07 !important;
}
.tab-item.inactive {
}
._z-index {
	z-index: 9999;
}
</style>
