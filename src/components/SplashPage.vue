<template>
  <div>
    <nav-bar></nav-bar>
      <h1>This is the Splash Page</h1>
        <router-link to ="/register/bizz" exact tag="button" class="button">BUSINESS</router-link>
        <router-link to ="/register/buzz" exact tag="button" class="button">INFLUENCER</router-link>
        <router-link to ="/login" exact tag="button" class="button">LOGIN</router-link>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  methods: {

    },
  components: {
      'nav-bar': NavBar
    },
}
</script>

<style scoped>
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

</style>