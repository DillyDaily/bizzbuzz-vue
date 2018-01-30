<template>
  <div id="register-bizz">
    <simple-nav></simple-nav>
      <div class="flowers">
        <div id="grey">
          <v-container>
            <v-layout>
              <v-flex xs12 sm8 offset-sm2>
                <v-layout row wrap>
                <v-flex xs12 >
                <v-card color="yellow darken-2" class="white--text">
                    <v-card-title primary-title>
                    <div class="welcome">Welcome to BizzBuzz Media</div>
                    <div class="welcome">Congrats on your Bizz! Now let's find you some Buzz...</div>
                    </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
            
            
          <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
            <h1>image images</h1>
            <div class="dropbox">
              <input type="file" 
                      :name="imageFieldName" 
                      :disabled="isSaving" 
                      @change="filesChange($event.target.name, $event.target.files); 
                      fileCount = $event.target.files.length" accept="image/*" 
                      class="input-file">
                <p v-if="isInitial">
                  Drag your file(s) here to begin<br> or click to browse
                </p>
                <p v-if="isSaving">
                  imageing {{ fileCount }} files...
                </p>
            </div>
          </form>
              <button @click.prevent="register"> Register </button> -->
              <v-form class="white">
                <v-text-field name="first_name" v-model="bizz.first_name" label="first name" required/>
                <v-text-field name="last_name" v-model="bizz.last_name" label="last name" required/>
                <v-text-field name="company_name" v-model="bizz.company_name" label="company name" required/>
                <v-text-field name="description" v-model="bizz.description" label="description" textarea required/>
                <v-text-field name="topics" v-model="bizz.topics" label="topics" required/>
                <v-text-field name="city" v-model="bizz.city" label="city" required/>
                <v-text-field name="state" v-model="bizz.state" label="state" required/>
                <v-text-field name="category" v-model="bizz.category" label="category" required/>
                <v-text-field name="email" v-model="bizz.email" label="email" required/>
                <v-text-field name="password" 
                              v-model="bizz.password" 
                              label="password" 
                              :append-icon="el ? 'visibility' : 'visibility_off'"
                              :append-icon-cb="() => (el = !el)"
                              :type="el ? 'password' : 'text'"
                              required/>
                <v-text-field name="image" v-model="bizz.image" label="logo" required/>
                <!-- <input type="file" @change="onFileChange()" name="image" accept=".jpg, .jpeg, .png" required/> -->
                <button @click.prevent="register"> Register </button>
              </v-form>
              <div v-if="submitted"></div>
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
        bizz: {
          first_name: '',
            last_name: '',
            email: '',
            password: '',
            description: '',
            category: '',
            topics: '',
            city: '',
            state: '',
            company_name: '',
            image: '',
            error: null
        },
        el: false,
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
                company_name: this.bizz.company_name,
                first_name: this.bizz.first_name,
                last_name: this.bizz.last_name,
                description: this.bizz.description,
                email: this.bizz.email,
                password: this.bizz.password,
                category: this.bizz.category,
                topics: this.bizz.topics,
                city: this.bizz.city,
                state: this.bizz.state,
                image: this.bizz.image,
            }) 
                this.$router.push('/login/bizz')
        }
    },
   
    computed: {
      
    },
    mounted () {

    }
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
