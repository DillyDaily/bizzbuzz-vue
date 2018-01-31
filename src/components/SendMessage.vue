<template>
  <div id="send-message">
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <div class="flowers">
      <div id="grey">
        <v-container>
          <v-layout row-wrap class="top-pad">
            <v-flex xs12 sm6 offset-sm3 >
              <v-container >
                <v-layout row-wrap class="shadow">
                  <v-flex xs12 >
                    <v-form >
                      <v-text-field id="mssgbody" 
                        name="message" 
                        v-model="bizz.message" 
                        placeholder="Your message here" 
                        textarea
                        required/>
                      <v-btn id="msgbtn" flat @click.prevent="send"> 
                        <v-icon left light>send</v-icon> Send </v-btn>
                    </v-form>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
     </div>
   <foot></foot>
  </div>
</template>

<script>
  import axios from 'axios';
  import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
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
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
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
    height: 900px;
  }
  .flowers {
    background-image: url("../assets/beeplant.jpg");
    background-size: cover;
  }
  .top-pad {
    margin-top: 10%;
  }
  .shadow{
    padding: 20px;
    -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
  }
  #mssgbody{
    cursor: text;
  }
  #msgbtn{
  color: rgb(154, 194, 108);
}

</style>
