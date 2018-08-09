<template>
    <div>
        <h3 class="icon"></h3>
        <h3 class="search"></h3>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
div {
	height: 7vh;
	display: flex;
	justify-content: space-between;
    align-items: center;
    h3{
        width: 5vh;
        height: 5vh;
        background: red;
        padding: 5vh;
    }
    .icon{
        background: url(../img/title2.png) no-repeat center;
        background-size: 5vh;
    }
    .search{
        background: url(../img/title3.png) no-repeat center;
        background-size: 5vh;
    }
}

</style>
