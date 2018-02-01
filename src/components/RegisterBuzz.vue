<template>
  <div id="register-bizz">
    <simple-nav></simple-nav>
      <div class="flowers">
        <div id="grey">
          <v-container>
            <v-layout >
              <v-flex xs12 sm6 offset-sm3 class="shadow">
                <v-layout row wrap>
                <v-flex xs12 >
                <v-card color="yellow darken-2" class="white--text">
                    <v-card-title primary-title>
                    <div class="welcome">Welcome to BizzBuzz Media</div>
                    <div class="grow">Great job creating all the Buzz! Now let's find you some Bizz...</div>
                    </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>

                    <v-form class="shadow">
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
                        label="key words"
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
                        label="website"
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
      register() {
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
}

</script>

<style scoped >
#grey {
  background-color: rgba(22, 22, 22, 0.637);
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
  #register-buzz {
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
    border-radius: 3px;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    cursor: pointer; 
    margin-top:1em;
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 1.5em;
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
      /* margin: 2%; */
      font-family: 'Shadows Into Light Two', cursive;
      font-size: 2vw;
      font-style: bold;
      color:white;
      display: flex;
      justify-content: center;
    }
    .grow{
      font-family: 'Shadows Into Light Two', cursive;
      font-size: 2vw;
      color:white;
      display: flex;
      justify-content: center;
    }
</style>
