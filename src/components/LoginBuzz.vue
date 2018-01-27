<template>
  <div>
    <simple-nav></simple-nav>
    <h1>BUZZ Login Page</h1>
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
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
      'simple-nav': SimpleNav
    }
  }

</script>
<style>
  button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
  }

</style>
