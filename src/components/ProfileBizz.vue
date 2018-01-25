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
                      <h3>Company Name: {{ oneProfile.company_name }} </h3>
                    </div>
                  </v-card-title>
                  <v-container column>
                    <v-layout row>
                      <v-flex xs12>
                        <v-card-media :src="oneProfile.image" height="250px" width="250px"></v-card-media>
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
  import SimpleNav from './SimpleNav.vue';
  export default {

    created() {
      this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },

    props: ['id'],

    computed: {
      oneProfile() {
        console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
        return this.$store.getters.loadedProfile(this.id)
      }
    },

    components: {
      'simple-nav': SimpleNav
    },
    methods: {
      clickMethod(id) {
        this.$router.push('/contact/' + id)
      }
    }
  }

</script>

<style>


</style>
