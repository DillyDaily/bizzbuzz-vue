<template>
  <div>
    <simple-nav></simple-nav>
    <h1>Login Page</h1>
    <v-container>
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

            <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"/>
            <br>
            <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"/>
            <br>
            <button type='submit'>Register</button>
      </form>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import SimpleNav from './SimpleNav.vue';

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
    userLogin() {}
},
  components: {
      'simple-nav': SimpleNav
    }
}
</script>
