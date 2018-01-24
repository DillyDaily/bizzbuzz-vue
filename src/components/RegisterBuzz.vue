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
                type="text"
                name="first_name"
                v-model="first_name"
                placeholder="first name"
                required/>
                <br>
                <input
                type="text"
                name="last_name"
                v-model="last_name"
                placeholder="last name"
                required/>
                <br>
                <input
                type="textarea"
                name="description"
                v-model="description"
                placeholder="description"
                required/>
                <br>
                <input
                type="text"
                name="personal_brand"
                v-model="personal_brand"
                placeholder="personal brand"
                required/>
                <br>
                <input
                type="text"
                name="website"
                v-model="website"
                placeholder="website"
                required/>
                <br>
                <input
                type="text"
                name="facebook"
                v-model="facebook"
                placeholder="facebook profile"
                required/>
                <br>
                <input
                type="text"
                name="instagram"
                v-model="instagram"
                placeholder="instagram profile"
                required/>
                <br>
                <input
                type="text"
                name="twitter"
                v-model="twitter"
                placeholder="twitter profile"
                required/>
                <br>
                <input
                type="text"
                name="image"
                v-model="image"
                placeholder="image"
                required/>
                <br>
                <button 
                @click.prevent="register">
                Create Buzz Profile
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
        Business: {},
        valid: false,
        first_name: '',
        last_name: '',
        description: '',
        personal_brand: '',
        website: '',
        facebook: '',
        instagram: '',
        twitter: '',
        image: ''
      }
    },
    components: {
      'simple-nav': SimpleNav
    },

    methods: {
        
    },
    computed: {
    
    },
}

</script>
