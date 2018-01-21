<template>
  <div id="influencer-list">
      <h2>Influencer List</h2>
      <ul>
           <li v-for="influencers in influencers">
            <span class="company">Company Name {{ influencers.company }}</span>              
            <span class="first_name">First Name {{ influencers.first_name }}</span>              
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  computed: {
    influencers(){
      return this.$store.state.influencers;
    }
  }
}
</script>

<style>


</style>
