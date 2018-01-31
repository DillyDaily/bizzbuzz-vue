<template>
  <div>
    <simple-nav></simple-nav>
    <div class="flowers">
      <div id="grey">
        <v-container>
          <v-layout class="top-pad">
            <v-flex xs12 sm6 offset-sm3 class="shadow">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="yellow darken-2" class="white--text">
                    <v-card-title primary-title>
                     <div id="card-logo">
                        <div class="logo"></div>
                      <div class="welcome">Congrats on your Buzz! Now let's find you some Bizz...</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
                <v-form class="shadow" @submit.prevent="userLogin">
                <v-text-field name="email" 
                              v-model="email" 
                              label="email" 
                              required/>
                <v-text-field name="password" 
                              v-model="password" 
                              type="password"
                              label="password" 
                              required/>
                <button type='submit'>Login</button>
              </v-form>
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
  import axios from 'axios';
  import Foot from './Foot.vue';
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        errMsg: false
      }
    },
    methods: {
      userLogin(e) {
        axios.post("http://localhost:8000/login/buzz", {email:this.email, password: this.password}).then((res)=>{
          console.log('response', res);
          localStorage.setItem("token", JSON.stringify(res.data));
          this.$router.push('/businesses')
          this.$store.dispatch('LOAD_USER_OBJECT')
          console.log('store state', this.$store.state)
        })
      }
    },
    components: {
      'simple-nav': SimpleNav,
      'foot': Foot
    }
  }

</script>
<style scoped>
  .top-pad {
    margin-top: 10%;
  }
  #grey {
    background-color: rgba(22, 22, 22, 0.637);
    background-size: cover;
    height: 900px;
  } 
  .flowers {
    background-image: url("../assets/beeplant.jpg");
    background-size: cover;
  } 
  button {
    background-color: rgb(154, 194, 108); /* Green */
    border-radius: 3px;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    cursor: pointer; 
    margin-top:1em;
  }
  button:hover {
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
  }
  .logo {
    background-image: url("../assets/bee1.png");
    background-size: cover;
    height: 50px;
    width: 75px;
    margin-right: 1%;
  }
  #card-logo{
    display: flex;
  }

</style>
