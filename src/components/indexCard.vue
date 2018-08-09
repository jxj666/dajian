<template>
  <div class="card">
    <h3><span class="title1">御</span><span class="title2">MAVIC</span><span class="title3">2</span><span class="title4">系列</span></h3>
    <image src="/static/img/goods.png"></image>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
.card{
  width: 90vw;
  height: 15vh;
  background:#f4fafb;
  border-radius: 1vh;
  margin-bottom: 1vh;
  display:flex;
  justify-content: space-around;
  align-items: center;
  h3{
    width:50vw;
    span{
      margin-left: 1vw;
      font-size: 14px;
    }
    .title1{}
        .title2{color: gray;}

    .title3{}

    .title4{color: gray;font-size: 12px;}

  }
  image{
    width: 30vw;
    height: 20vw;
  }
}
</style>
