<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import BusinessList from './components/BusinessList.vue';
import NavBar from './components/NavBar.vue';

export default {
    name: 'app',
    // components: {
    //   'business-list': BusinessList,
    //   'nav-bar': NavBar
    // }
}
</script>
 
<style>


</style>
