<template>
  <div id="my-bizz-profile">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
        <v-container grid-list-md text-xs-center class="shadow">
          <v-layout row wrap class="top-pad">
            <v-flex xs12>
              <v-card color="yellow darken-2" class="black--text">
                <v-card-title primary-title>
                  <div class="welcome">Welcome back, {{ myProfile.first_name }}!</div>
                  <v-spacer></v-spacer>
                  <template>
                  <edit-bizz-profile-dialog :profile="myProfile"></edit-bizz-profile-dialog>
                  </template>
                  <v-btn class="red" fab @click="deleteForever(myProfile.id)">
                    <v-icon color="white">delete</v-icon>
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-flex>
             <v-flex xs6 class="white">
              <v-card>
                <v-card-media id="pointer"  :src="myProfile.image" height="400px" width="400px" />
              </v-card>
            </v-flex>
            <v-flex xs6 offset-6 class="white">
              <div class="profile-card">
                <v-card-text class="px-0"><div><b>Company:</b> {{ myProfile.company_name}}</div></v-card-text>
                <!-- <v-card-text class="px-0"><h3>Email: {{ myProfile.email}}</h3></v-card-text> -->
                <v-card-text class="px-0"><div><b>Description:</b> {{ myProfile.description}}</div></v-card-text>
                <v-card-text class="px-0"><div><b>Topics:</b> {{ myProfile.topics}} </div></v-card-text>
                <v-card-text class="px-0"><div><b>City: </b>{{ myProfile.city}} </div></v-card-text>
                <v-card-text class="px-0"><div><b>State:</b> {{ myProfile.state}} </div></v-card-text>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
     </div>
    <foot></foot>
  </div>
</template>

<script>
import NavBarLoggedIn from './NavBarLoggedIn.vue';
import EditBizzProfileDialog from './Edit/EditBizzProfileDialog.vue';
import Foot from './Foot.vue';
import axios from 'axios';

export default {
    props: ['id'],
    
    data() {
      return {
        editedName: this.id.first_name,
        editedDescription: this.id.description,
        editedLastName: this.id.last_name,
        editedEmail:this.id.email,
        editedPassword:this.id.password,
        editedTopics:this.id.topics,
        editedCity:this.id.city,
        editedState:this.id.state,
        // editedImage:this.id.image,
        eidtedCompanyName:this.id.company_name,
        dialog: false,
        }
    },
    created() {
      this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },

    components: {
      'nav-bar-logged-in': NavBarLoggedIn,
      'foot': Foot,
      'edit-bizz-profile-dialog': EditBizzProfileDialog
    },
    computed: {
      myProfile() {
        console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
        return this.$store.getters.loadedProfile(this.id)
      }
    },
    methods: {
      deleteForever(){
      let storedToken = localStorage.getItem('token');
      let parsedToken = JSON.parse(storedToken);
      this.axios.delete(`/delete/business/${parsedToken.user_id}?token=${parsedToken.token}`)
      .then(response => {
        this.$router.push('/');
        })
      }
    }
}

</script>


<style scoped>
  #grey {
    background-color: rgba(255, 255, 255, 0.637);
    background-size: cover;
    height: 900px;
    } 
  .flowers {
    background-image: url("../assets/beeplant.jpg");
    background-size: cover;
  } 
  #pointer {
    cursor: pointer;
  }
  #edit {
    color: black;
  }
  .welcome {
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 3vw;
    color: white !important;
  }
  .top-pad {
    margin-top: 10%;
  }
  .shadow{
    padding: 10%;
  }
  .profile-card{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    padding-top: 4%;
  }
</style>