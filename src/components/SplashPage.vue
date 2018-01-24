<template>
  <div>
    <nav-bar></nav-bar>
      <h1>This is the Splash Page</h1>
        <router-link to ="/register" exact tag="button" class="button">REGISTER</router-link>
        <router-link to ="/login" exact tag="button" class="button">LOGIN</router-link>
        <div class="pointer" @click="clickMethod">
          <img src = "../assets/bee1.png"/>
        </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  methods: {
  clickMethod() {
      this.$router.push('businesses')
      }
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
.pointer {
  cursor: pointer;
}

</style>