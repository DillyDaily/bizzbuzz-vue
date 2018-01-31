<template>
  <div class="splash-page">
  <simple-nav-bar></simple-nav-bar>
    <div class="flowers">
      <div id="grey">
        <v-container>
          <v-layout class="top-pad">
            <v-flex xs12 sm6 offset-sm3 class="shadow">
              <v-layout class="shadow">
                <v-flex xs12>
                  <v-card color="yellow darken-2" class="white--text">
                    <v-card-title primary-title>
                      <div>
                      <div class="welcome">Welcome to <span class="bizzbuzz">BizzBuzz Media</span></div>
                      <div class="welcome">We're here to help you grow.</div>
                      </div>
                    </v-card-title>
                  </v-card>
                  <div class="btn-group-create" v-if="createProfile">
                    <div class="splash"><router-link to ="/register/bizz" exact tag="button" class="button">Create Business Acct</router-link></div>
                    <div class="splash"><router-link to ="/register/buzz" exact tag="button" class="button">Create Influencer Acct</router-link></div>
                    <p>Already have an account?
                      <v-btn flat class="blue--text" @click="createProfile = !createProfile"> login </v-btn> 
                    </p>
                  </div>
                  <div class="btn-group-login" v-else-if="login">
                    <div class="splash"><router-link to ="/login/bizz" exact tag="button" class="button">Login as Bizz</router-link></div>
                    <div class="splash"><router-link to ="/login/buzz" exact tag="button" class="button">Login as Buzz</router-link></div>
                    <p>j/k let's create one.
                      <v-btn flat class="blue--text" @click="createProfile = !createProfile"> click here </v-btn>
                    </p>
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
      login: true,
      createProfile: true,
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
.top-pad {
  margin-top: 10%;
}
#grey {
  background-color: rgba(22, 22, 22, 0.637);
  background-size: cover;
  height: 800px;
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
.button:hover {
    background-color: rgb(96, 122, 67);
}

.shadow{
  padding: 20px;
  -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  background-color: rgb(228, 227, 227);
  border-radius: 4px;
}
.welcome {
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 2vw;
  color:white;
}
.bizzbuzz{
  font-family: 'Cabin Sketch', cursive;
  font-size: 2.5vw;
  color: white;
}
.splash{
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 2em;
}

</style>