<template>
  <div id="register-buzz">
    <simple-nav></simple-nav>
    <h1>Buzz Register</h1>
    <v-container>
        <v-layout >
        <v-flex xs12 sm6 offset-sm3>
            <v-layout row wrap>
            <v-flex xs12>
            <v-card color="yellow darken-2" class="white--text">
                <v-card-title primary-title>
                <div class="welcome">Welcome to BizzBuzz Media</div>
                <div class="welcome">Congrats on your Buzz! Now let's find you some Bizz...</div>
                <div>
                    <p>Create a profile so businesses can see what you're all about.</p>
                </div>
                </v-card-title>
            </v-card>
            </v-flex>
            </v-layout>
            <form class="shadow">
                <input
                type="email"
                name="email"
                v-model="buzz.email"
                placeholder="email"/>
                <input
                type="password"
                name="password"
                v-model="buzz.password"
                placeholder="password"/>
                <input
                type="text"
                name="first_name"
                v-model="buzz.first_name"
                placeholder="first name"
                required/>
                <input
                type="text"
                name="last_name"
                v-model="buzz.last_name"
                placeholder="last name"
                required/>
                <input
                type="textarea"
                name="description"
                v-model="buzz.description"
                placeholder="description"
                required/>
                <input
                type="textarea"
                name="topics"
                v-model="buzz.topics"
                placeholder="topics"
                required/>
                <input
                type="text"
                name="personal_brand"
                v-model="buzz.personal_brand"
                placeholder="personal brand"
                required/>
                <input
                type="text"
                name="category"
                v-model="buzz.category"
                placeholder="buzz category"
                required/>
                <input
                type="text"
                name="city"
                v-model="buzz.city"
                placeholder="city"
                required/>
                <input
                type="text"
                name="state"
                v-model="buzz.state"
                placeholder="state"
                required/>
                <input
                type="text"
                name="image"
                v-model="buzz.image"
                placeholder="image"
                required/>
                <button 
                @click.prevent="register">
                Register
                </button>
            </form>
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
        buzz: {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            description: '',
            personal_brand: '',
            topics: '',
            category: '',
            city: '',
            state: '',
            image: ''
        },
        valid: false,
      }
    },
    components: {
      'simple-nav': SimpleNav
    },

    methods: {
      register(e) {
            this.axios.post('/register/buzz', {
                email: this.buzz.email,
                password: this.buzz.password,
                first_name: this.buzz.first_name,
                last_name: this.buzz.last_name,
                description: this.buzz.description,
                personal_brand: this.buzz.personal_brand,
                topics: this.buzz.topics,
                category: this.buzz.category,
                city: this.buzz.city,
                state: this.buzz.state,
                image: this.buzz.image,
            }).then((res) => {
                this.$router.push('/login/buzz')
            }) 
        }
    },
    computed: {
    
    },
}

</script>
