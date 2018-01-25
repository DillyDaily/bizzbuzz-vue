<template>
  <div id="business-list">
    <simple-nav></simple-nav>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="yellow darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="welcome">Hot dog! Look at all that Bizz!</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container column>
      <v-layout row wrap>
        <v-flex xs12 sm10 md6 v-for="business in allBusinesses" :key="business.id">
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media id="pointer" @click="clickMethod(business.id)" :src="business.image" height="250px" width="250px" />
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <h3>Company Name: {{ business.company_name }} </h3>
                      <div>Description: {{ business.description }} </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="green" @click="clickMethod(business.id)">
                      <v-icon left light>account_circle</v-icon>
                      View Profile</v-btn>
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
    data: () => ({

    }),
    components: {
      'simple-nav': SimpleNav
    },
    methods: {
      clickMethod(id) {
        this.$router.push('/profile/bizz/' + id)
      }
    },
    computed: {
      allBusinesses() {
        console.log("allBusinesses", this.$store.state.businesses)
        return this.$store.state.businesses
      }
    },
    created() {
      this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },
    mounted() {}
  }

</script>

<style>
  .pics {
    height: 250px;
    width: 250px;
  }

  #pointer {
    cursor: pointer;
  }

</style>
