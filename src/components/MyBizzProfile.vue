<template>
  <div id="my-bizz-profile">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="yellow darken-2" class="black--text">
                <v-card-title primary-title>
                  <div class="welcome">Welcome back, {{ myProfile.first_name }}!</div>
                  <v-spacer></v-spacer>
                  <template>
                  <edit-bizz-profile-dialog :profile="myProfile"></edit-bizz-profile-dialog>
                  </template>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card dark color="secondary">
                <v-card-media id="pointer"  :src="myProfile.image" height="250px" width="250px" />
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card dark color="secondary">
                <v-card-text class="px-0"><h1>Company: {{ myProfile.company_name}}</h1></v-card-text>
                <v-card-text class="px-0"><h3>Email: {{ myProfile.email}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>Description: {{ myProfile.description}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>Topics: {{ myProfile.topics}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>City: {{ myProfile.city}}</h3></v-card-text>
                <v-card-text class="px-0"><h3>State: {{ myProfile.state}}</h3></v-card-text>
              </v-card>
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
}

</script>


<style scoped>
  #grey {
    background-color: rgba(255, 255, 255, 0.637);
    background-size: cover;
    height: 800px;
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
  font-size: 5vw;
  color: white !important;
}

</style>
