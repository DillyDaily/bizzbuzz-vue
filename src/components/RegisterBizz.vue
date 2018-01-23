<template>
  <div>
    <simple-nav></simple-nav>
    <h1>Bizz Register</h1>
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
            <button 
            @click.prevent="register">
            Register
            </button>

        <p>{{ Business.company }}</p>
        <p>{{ Business.first_name }}</p>
        <p>{{ Business.last_name }}</p>

      </form>
      <!-- <v-form v-model="valid">
            <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
            ></v-text-field>
             <v-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            required
            ></v-text-field>
             <button 
            @click="register">
            Register
            </button>
        </v-form> -->
      </v-flex>
    </v-layout>
  </v-container>




  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js';
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';
export default {
    data () {
        return {
            // email: '',
            // password: '',
            // error: null
        Business: {},
        valid: false,
        email: '',
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length <= 10 || 'Password must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    components: {
      'simple-nav': SimpleNav
    },
    // watch: {
    //     email (value) {
    //         console.log('email has changed', value)
    //     }
    // },
    methods: {
        async register() {
            console.log('register btn was clicked')
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log('response:', response)
        }
    },
    computed: {
      
    
    },
    mounted () {
        axios.get('http://localhost:8000/register')
        .then((response) => {
            console.log('axios response: ' + response.data)
            this.Business = response.data;
        })
        console.log('Register Biz component mounted')
    }
}

</script>
