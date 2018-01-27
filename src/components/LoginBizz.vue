<template>
  <div>
    <simple-nav></simple-nav>
      <div class="flowers">
        <div id="grey">
        <v-container>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3 color="white">
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
              <form @submit.prevent="userLogin"  class="shadow">
                <input type="email" name="email" v-model="email" placeholder="email" />
                <br>
                <input type="password" name="password" v-model="password" placeholder="password" />
                <br>
                <button type='submit'>Login</button>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
  import SimpleNav from './SimpleNav.vue';
  import axios from 'axios';
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
        axios.post("http://localhost:8000/login/bizz", {email:this.email, password: this.password}).then((res)=>{
          console.log('response', res);
          localStorage.setItem("token", JSON.stringify(res.data));
          this.$router.push('/influencers')
          this.$store.dispatch('LOAD_USER_OBJECT')
          console.log('store state', this.$store.state)
        })
      }
    },
    components: {
      'simple-nav': SimpleNav
    }
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
  button {
    background-color: rgb(154, 194, 108);
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
  }

</style>
