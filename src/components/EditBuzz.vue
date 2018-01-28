<template>
  <div>
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <h1>Edit Buzz Profile</h1>
    <!-- <nav-bar></nav-bar> -->
  </div>
</template>

<script>
import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
import Foot from './Foot.vue';

export default {
    
    components: {
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
      'foot': Foot
    },
}
</script>
 
<style>


</style>