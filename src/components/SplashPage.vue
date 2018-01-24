<template>
  <div>
    <nav-bar></nav-bar>
      <h1>This is the Splash Page</h1>
        <router-link to ="/register/bizz" exact tag="button" class="button">BUSINESS</router-link>
        <router-link to ="/register/buzz" exact tag="button" class="button">INFLUENCER</router-link>
        <router-link to ="/login" exact tag="button" class="button">LOGIN</router-link>
  
  <!-- <v-container>
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
      <form class="shadow">
        <v-text-field
          label="Name"
          v-model="name"
   
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          
          required
        ></v-text-field>

        <v-btn @click="submit">Submit</v-btn>
      </form>
      </v-flex>
    </v-layout>
  </v-container> -->
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
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
      'nav-bar': NavBar
    },
}
</script>

<style scoped>
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
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