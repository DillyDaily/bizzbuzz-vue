<template>
  <div id="register-bizz">
    <simple-nav></simple-nav>
      <div class="flowers">
        <div id="grey">
          <v-container>
            <v-layout >
              <v-flex xs12 sm8 offset-sm2>
                <v-layout row wrap>
                <v-flex xs12 >
                <v-card color="yellow darken-2" class="white--text">
                    <v-card-title primary-title>
                    <div class="welcome">Welcome to BizzBuzz Media</div>
                    <div class="welcome">Great job creating all the Buzz! Now let's find you some Bizz...</div>
                    </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>

                    <v-form class="white">
                        <v-text-field
                        name="email"
                        v-model="buzz.email"
                        label="email"
                        required/>
                        <v-text-field
                        name="password"
                        v-model="buzz.password"
                        label="password"
                        :append-icon="el ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (el = !el)"
                        :type="el ? 'password' : 'text'"
                        required/>
                        <v-text-field
                        name="first_name"
                        v-model="buzz.first_name"
                        label="first name"
                        required/>
                        <v-text-field
                        name="last_name"
                        v-model="buzz.last_name"
                        label="last name"
                        required/>
                        <v-text-field
                        name="description"
                        v-model="buzz.description"
                        label="description"
                        textarea
                        required/>
                        <v-text-field
                        name="topics"
                        v-model="buzz.topics"
                        label="topics"
                        textarea
                        required/>
                        <v-text-field
                        name="personal_brand"
                        v-model="buzz.personal_brand"
                        label="personal brand"
                        required/>
                        <v-text-field
                        name="category"
                        v-model="buzz.category"
                        label="buzz category"
                        required/>
                        <v-text-field
                        name="city"
                        v-model="buzz.city"
                        label="city"
                        required/>
                        <v-text-field
                        name="state"
                        v-model="buzz.state"
                        label="state"
                        required/>
                        <v-text-field
                        name="image"
                        v-model="buzz.image"
                        label="image"
                        required/>
                        <button 
                        @click.prevent="register">
                        Register
                        </button>
                    </v-form>
            </v-flex>
            </v-layout>
        </v-container>
      </div>
    </div>
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
        el: false,
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

<style scoped >
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
} 
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

/* CSS */
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
button {
    background-color: rgb(154, 194, 108); /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
