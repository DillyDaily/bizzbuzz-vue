<template>
  <div id="profile-buzz">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
      <v-container>
        <v-layout row class="white">
          <v-flex xs12>
            <v-card>
              <v-container fluid>
                <v-layout row>
                  <v-flex>
                    <v-card-title primary-title>
                      <div>
                        <h3>Personal Brand: {{ oneProfile.personal_brand }} </h3>
                      </div>
                    </v-card-title>
                    <v-container column>
                      <v-layout row>
                        <v-flex xs12 sm6 med6>
                          <v-card-media :src="oneProfile.image" height="400px" width="250px"></v-card-media>
                          <v-card-text>
                            <div>Description: {{ oneProfile.description }} </div>
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn id="msgbtn" flat @click="clickMethod(oneProfile.id)">
                        <v-icon left light>send</v-icon>
                        Message</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import NavBarLoggedIn from './NavBarLoggedIn.vue';
  
  export default {

    created() {
      this.$store.dispatch('LOAD_INFLUENCERS_LIST')
    },

    props: ['id'],

    computed: {
      oneProfile() {
        // console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
        return this.$store.getters.loadedBuzzProfile(this.id)
      }
    },

    components: {
      'nav-bar-logged-in': NavBarLoggedIn
    },
    methods: {
      clickMethod(id) {
        this.$router.push('/contact/buzz/' + id)
      }
    }
  }

</script>

<style>
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
} 
#msgbtn{
  color: rgb(154, 194, 108);
}
/* #msgbtn:hover {
    background-color: rgb(96, 122, 67);
} */

</style>
