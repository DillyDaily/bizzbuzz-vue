<template>
  <div class="splash-page">
  <simple-nav-bar></simple-nav-bar>
  <div class="flowers">
    <div id="grey">
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3 >
          <v-layout class="shadow">
            <v-flex xs12>
              <v-card color="yellow darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                   <h3 class="welcome">Welcome to BizzBuzz Media</h3>
                  <div class="grow">We're here to help you grow.</div>
                  </div>
                </v-card-title>
              </v-card>
                  <div class="btn-group">
                  <div><router-link to ="/register/bizz" exact tag="button" class="button">CREATE BUSINESS ACCT</router-link></div>
                  <div><router-link to ="/register/buzz" exact tag="button" class="button">CREATE INFLUENCER ACCT</router-link></div>
                  <div><router-link to ="/login/bizz" exact tag="button" class="button">LOGIN AS BIZZ</router-link></div>
                  <div><router-link to ="/login/buzz" exact tag="button" class="button">LOGIN AS BUZZ</router-link></div>
                  <!-- <div><router-link to ="/logout" exact tag="button" class="button">LOGOUT</router-link></div> -->
                  </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
  </div>
  <foot></foot>
  </div>
</template>

<script>
import SimpleNav from './SimpleNav.vue';
import Foot from './Foot.vue';

export default {
  data() {
    return {
      name: '',
        email: '',
    }
  },
  methods: {
    submit () {
        console.log('submit btn clicked')
    }
  },
  components: {
      'simple-nav-bar': SimpleNav,
      'foot': Foot
    },
}
</script>

<style scoped>
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
} 

.button {
    background-color: rgb(154, 194, 108); /* Green */
    border-radius: 3px;
    color: white;
    padding: 10% 24%; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 100%; /* Set a width if needed */
    display: block; /* Make the buttons appear below each other */
    margin-top:1em;
}
.btn-group button:hover {
    background-color: rgb(96, 122, 67);
}

.shadow{
  padding: 20px;
  -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  margin-top: 10%;
  margin-bottom: 40%;
}
.welcome {
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 2vw;
}


</style>