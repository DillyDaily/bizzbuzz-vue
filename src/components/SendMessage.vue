<template>
  <div id="send-message">
    <simple-nav></simple-nav>
    <div class="flowers">
      <div id="grey">
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
        <foot></foot>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import SimpleNav from './SimpleNav.vue';
  import Foot from './Foot.vue';

  export default {
    data() {
      return {
        bizz: {
          message: '',
          error: null
        }
      }
    },
    components: {
      'simple-nav': SimpleNav,
      'foot': Foot
    },
    methods: {
      send() {
        let parsedToken = JSON.parse(localStorage.getItem('token'))
        console.log(parsedToken)
        this.axios.post('/contact/bizz/' + this.$route.params.id, {
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
