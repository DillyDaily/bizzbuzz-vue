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
        <div v-for="influencer in Influencers" class="single-influencer">
            <h2>INFLUENCER first name: {{ influencer.first_name }}</h2>
            <h3>LAST name: {{ influencer.last_name }} </h3>
        </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';
export default {
    data () {
        return {
          Influencers: []
      }
    },
    components: {
      'simple-nav': SimpleNav
    },
    methods: {
      async register() {
          console.log('register btn was clicked')
          const response = await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
          console.log('response:', response)
      }
    },
    computed: {
      
    
    },
    mounted () {
        axios.get('http://localhost:8000/influencers')
        .then((response) => {
            console.log('axios response: ', response.data)
            this.Influencers = response.data;
        })
        console.log('BUZZList component mounted')
    }
}

</script>

