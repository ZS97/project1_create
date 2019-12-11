<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <div  class="fm-container"><router-view/></div>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
.fm-container{
  height: calc(100% - 50px);
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
