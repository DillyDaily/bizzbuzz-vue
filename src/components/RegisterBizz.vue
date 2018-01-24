<template>
  <div id="register-bizz">
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
            <input type="email" name="email" v-model="bizz.email" placeholder="email"/>
            <br>
            <input type="password" name="password" v-model="bizz.password" placeholder="password"/>
            <br>
            <input type="text" name="first_name" v-model="bizz.first_name" placeholder="first name" required/>
            <br>
            <input type="text" name="last_name" v-model="bizz.last_name" placeholder="last name" required/>
            <br>
            <input type="textarea" name="description" v-model="bizz.description" placeholder="description" required/>
            <br>
            <input type="text" name="company_name" v-model="bizz.company_name" placeholder="company name" required/>
            <br>
            <input type="text" name="image" v-model="bizz.image" placeholder="image" required/>
            <br>
            <button @click.prevent="register"> Register </button>
          </form>
          <div v-if="submitted"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';
export default {
    data () {
        return {
        bizz: {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            description: '',
            company_name: '',
            image: '',
            error: null
        },
        valid: false,
        submitted: false,
        
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
    methods: {
        register() {
            this.axios.post('/register/bizz', {
                email: this.bizz.email,
                password: this.bizz.password,
                first_name: this.bizz.first_name,
                last_name: this.bizz.last_name,
                description: this.bizz.description,
                company_name: this.bizz.company_name,
                image: this.bizz.image,
            }) 
                this.$router.push('/influencers')
        }
    },
    computed: {
      
    
    },
    mounted () {
        // axios.get('http://localhost:8000/register')
        // .then((response) => {
        //     console.log('REGISTER PAGE axios response: ', response.data)
        //     this.Business = response.data;
        // })
        // console.log('Register Biz component mounted')
    }
}

</script>

<style>
#register-bizz {
   margin: 20px auto;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input {
    display: block;
    background-color: #eee;
    width: 100%;
    padding: 1%;
}
</style>
