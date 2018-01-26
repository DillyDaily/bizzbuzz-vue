<template>
  <div>
    <simple-nav-bar></simple-nav-bar>
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
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
                  <div><router-link to ="/register/bizz" exact tag="button" class="button">BUSINESS</router-link></div>
                  <div><router-link to ="/register/buzz" exact tag="button" class="button">INFLUENCER</router-link></div>
                  <div><router-link to ="/login" exact tag="button" class="button">LOGIN</router-link></div>
                  <div><router-link to ="/logout" exact tag="button" class="button">LOGOUT</router-link></div>
                  </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SimpleNav from './SimpleNav.vue';
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
      'simple-nav-bar': SimpleNav
    },
}
</script>

<style scoped>
.button {
    background-color: #4CAF50; /* Green */
    border-radius: 3px;
    color: white;
    padding: 10% 24%; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 100%; /* Set a width if needed */
    display: block; /* Make the buttons appear below each other */
    margin-top:1em;
}
.btn-group button:hover {
    background-color: #3e8e41;
}

.shadow{
  padding: 20px;
  -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
}
.welcome {
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 2vw;
}

</style>