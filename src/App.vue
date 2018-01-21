<template>
  <div id="app">
    <business-list></business-list>
    <influencer-list></influencer-list>
  </div>
</template>

<script>
import BusinessList from './components/BusinessList.vue';
import InfluencerList from './components/InfluencerList.vue';

export default {
    name: 'app',
    components: {
      'business-list': BusinessList,
      'influencer-list': InfluencerList
    }
}
</script>
 
<style>


</style>
