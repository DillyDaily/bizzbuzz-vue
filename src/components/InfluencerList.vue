<template>
  <div id="influencer-list">
    <simple-nav></simple-nav>
    <h1>Get All influencers</h1>
    
            <v-layout row wrap>
            <v-flex xs12>
            <v-card color="yellow darken-2" class="white--text">
                <v-card-title primary-title>
                 <div class="welcome">Wow, man. Look at all that Buzz...</div>
                </v-card-title>
            </v-card>
            </v-flex>
            </v-layout>
        <!-- <div v-for="influencer in Influencers" class="single-influencer">
            <h2>INFLUENCER first name: {{ influencer.first_name }}</h2>
            <h3>LAST name: {{ influencer.last_name }} </h3>
        </div> -->
        <div>OPEN Bizz: {{ allInfluencers }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';
export default {
    data () {
        return {
          influencers: []
      }
    },
    components: {
      'simple-nav': SimpleNav
    },
    methods: {
      
    },
    computed: {
        allInfluencers() {
            return this.$store.state.influencers
        }
    },
    created () {
        this.$store.dispatch('LOAD_INFLUENCERS_LIST')
    },

    mounted () {
        // axios.get('http://localhost:8000/influencers')
        // .then((response) => {
        //     console.log('axios response: ', response.data)
        //     this.Influencers = response.data;
        // })
        // console.log('BUZZList component mounted')
    }
}

</script>

