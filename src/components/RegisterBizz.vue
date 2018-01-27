<template>
  <div id="register-bizz">
    <simple-nav></simple-nav>
    <!-- <h1>Bizz Register</h1> -->
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
          <v-form class="shadow">
            <input type="text" name="first_name" v-model="bizz.first_name" placeholder="first name" required/>
            <input type="text" name="last_name" v-model="bizz.last_name" placeholder="last name" required/>
            <input type="text" name="company_name" v-model="bizz.company_name" placeholder="company name" required/>
            <input type="textarea" name="description" v-model="bizz.description" placeholder="description" required/>
            <input type="textarea" name="topics" v-model="bizz.topics" placeholder="topics" required/>
            <input type="city" name="city" v-model="bizz.city" placeholder="city" required/>
            <input type="state" name="state" v-model="bizz.state" placeholder="state" required/>
            <input type="category" name="category" v-model="bizz.category" placeholder="category" required/>
            <input type="email" name="email" v-model="bizz.email" placeholder="email" required/>
            <input type="password" name="password" v-model="bizz.password" placeholder="password" required/>
            <input type="text" name="image" v-model="bizz.image" placeholder="logo" required/>
            <!-- <input type="file" @change="onFileChange()" name="image" accept=".jpg, .jpeg, .png" required/> -->
            <button @click.prevent="register"> Register </button>
          </v-form>
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
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
