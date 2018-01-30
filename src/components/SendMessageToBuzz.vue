<template>
  <div id="send-message">
    <nav-bar-logged-in></nav-bar-logged-in>
    <h1>SEND Mssg to BUZZ from BIZZ</h1>
    <div class="flowers">
      <div id="grey">
        <v-container>
          <v-layout>
            <v-flex xs12>
              <form class="shadow">
                <input type="textarea" name="message" v-model="buzz.message" placeholder="message" required/>
                <button @click.prevent="send"> Send </button>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
        <foot></foot>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import NavBarLoggedIn from './NavBarLoggedIn.vue';
  import Foot from './Foot.vue';

  export default {
    data() {
      return {
        buzz: {
          message: '',
          error: null
        }
      }
    },
    components: {
      'nav-bar-logged-in': NavBarLoggedIn,
      'foot': Foot
    },
    methods: {
      send() {
        let parsedToken = JSON.parse(localStorage.getItem('token'))
        console.log(parsedToken)
        this.axios.post('/contact/buzz/' + this.$route.params.id, {
          token: parsedToken.token,
          message: this.buzz.message,
          businesses_id: parsedToken.user_id

        })
        this.$router.push('/influencers')
      }
    }
  }

</script>

<style scoped>
  #grey {
    background-color: rgba(255, 255, 255, 0.637);
    background-size: cover;
    height: 800px;
  }

  .flowers {
    background-image: url("../assets/beeplant.jpg");
    background-size: cover;
  }

</style>
