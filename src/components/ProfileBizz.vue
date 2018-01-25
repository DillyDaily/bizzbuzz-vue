<template>
  <div id="profile-bizz">
    <simple-nav></simple-nav>
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
                        <h3>Company Name: </h3>
                      </div>
                    </v-card-title>
                  <v-container column>
                    <v-layout row>
                    <v-flex xs12 >
                    <v-card-media
                      src="http://placehold.it/250x250"
                      height="250px"
                    ></v-card-media>
                    <v-card-text>
                      <div>Description: </div>
                    </v-card-text>
                    </v-flex>
                    </v-layout>
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="green">
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
import SimpleNav from './SimpleNav.vue';
export default {

  computed: {
    
  },
  created () {
        this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },
    components: {
      'simple-nav': SimpleNav
    },
}
</script>

<style>


</style>