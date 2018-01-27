<template>
  <div id="profile-bizz">
    <nav-bar-logged-in></nav-bar-logged-in>
    <h2>Bizz Profile</h2>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-container fluid>
              <v-layout row>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <h3>Company Name: {{ oneProfile.company_name }} </h3>
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
                    <v-btn flat color="green" @click="clickMethod(oneProfile.id)">
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
</template>

<script>
  import axios from 'axios';
  import NavBarLoggedIn from './NavBarLoggedIn.vue';
  export default {

    created() {
      this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },

    props: ['id'],

    computed: {
      oneProfile() {
        // console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
        return this.$store.getters.loadedProfile(this.id)
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


</style>
