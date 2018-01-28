<template>
  <div id="send-message">
    <simple-nav></simple-nav>
      <h2>Send A Message</h2>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <form class="shadow">
            <input type="textarea" name="message" v-model="bizz.message" placeholder="message" required/>
            <button @click.prevent="send"> Send </button>
          </form>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';

export default {
  data () {
    return {
    bizz: {
        message: '',
        error: null
      }
     }
    },
  components: {
      'simple-nav': SimpleNav
    },
  methods: {
      send() {
        let parsedToken = JSON.parse(localStorage.getItem('token'))
        console.log(parsedToken)
          this.axios.post('/contact/bizz/'+this.$route.params.id, {
              token: parsedToken.token,
              message: this.bizz.message,
              influencers_id: parsedToken.user_id

          }) 
              this.$router.push('/businesses')
      }
    }
}
</script>

<style scoped>


</style>