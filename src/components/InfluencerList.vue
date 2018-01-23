<template>
  <div id="business-list">
    <h1>Get All influencers</h1>
    <v-container>
        <v-layout >
        <v-flex xs12 sm6 offset-sm3>
            <v-layout row wrap>
            <v-flex xs12>
            <v-card color="yellow darken-2" class="white--text">
                <v-card-title primary-title>
                <div class="welcome">Welcome to BizzBuzz Media</div>
                <div class="welcome">Congrats on your Bizz! Now let's find you some Buzz...</div>
                </v-card-title>
            </v-card>
            </v-flex>
            </v-layout>
        <div>
          <p>First Name: {{ Influencers[1].first_name }}</p>
          <p>Last Name: {{ Influencers[1].last_name }}</p>
        </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
      }
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
        console.log('BizzList component mounted')
    }
}

</script>

