<template>
  <div id="my-buzz-profile">
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
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
                  <edit-buzz-profile-dialog :profile="myProfile"></edit-buzz-profile-dialog>
                  </template>
                  <v-btn class="red" fab @click="deleteForever(myProfile.id)">
                    <v-icon color="white">delete</v-icon>
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs6 class="white">
              <v-card  >
                <v-card-media id="pointer"  :src="myProfile.image" height="400px" width="400px" />
              </v-card>
            </v-flex>
            <v-flex xs6 offset-6 class="white">
              <div>
                <v-card-text class="px-0"><h1>Personal Brand: {{ myProfile.personal_brand}}</h1></v-card-text>
                <v-card-text class="px-0"><h3>Description: {{ myProfile.description}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>Topics: {{ myProfile.topics}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>City: {{ myProfile.city}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>State: {{ myProfile.state}}</h3></v-card-text>
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
import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
import Foot from './Foot.vue';
import axios from 'axios';
import EditBuzzProfileDialogVue from './Edit/EditBuzzProfileDialog.vue';

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
        editedPersonalBrand: this.id.personal_brand,
        dialog: false,
        }
    },
    created() {
      this.$store.dispatch('LOAD_INFLUENCERS_LIST')
    },

    components: {
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
      'foot': Foot,
      'edit-buzz-profile-dialog': EditBuzzProfileDialogVue
    },
    computed: {
      myProfile() {
        console.log('LOADED BUZZ PROFILE???', this.$store.getters.loadedBuzzProfile(this.id))
        return this.$store.getters.loadedBuzzProfile(this.id)
      }
    },
    methods: {
      deleteForever(){
      let storedToken = localStorage.getItem('token');
      let parsedToken = JSON.parse(storedToken);
      this.axios.delete(`/delete/influencer/${parsedToken.user_id}?token=${parsedToken.token}`)
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

</style>