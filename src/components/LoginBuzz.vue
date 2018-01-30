<template>
  <div>
    <simple-nav></simple-nav>
    <div class="flowers">
      <div id="grey">
        <v-container>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="white">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="yellow darken-2" class="white--text">
                    <v-card-title primary-title>
                      <div class="welcome">Welcome to BizzBuzz Media</div>
                      <div class="welcome">Congrats on your Buzz! Now let's find you some Bizz...</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
                <v-form @submit.prevent="userLogin">
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
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  height: 800px;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
  height: 800px;
} 
  button {
    background-color: rgb(154, 194, 108);
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
  }

</style>
