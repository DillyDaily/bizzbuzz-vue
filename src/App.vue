<template>
  <div id="app">
  <div id="grey">
    <router-view></router-view>
    <!-- <nav-bar></nav-bar> -->
  </div>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';

export default {
    name: 'app',
    components: {
      // 'business-list': BusinessList,
      // 'nav-bar': NavBar
    }
}
</script>
 
<style>
/* #grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
}
#app {
  background-image: url("https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/36349_892151638902_4438690_n.jpg?oh=4802b559bad8deadc6c2ba6e99fdfb71&oe=5AF5B060");
  background-size: cover;
} */


</style>
