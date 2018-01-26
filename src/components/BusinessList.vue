<template>
  <div id="business-list">
    <nav-bar-logged-in></nav-bar-logged-in>
    <v-container column>
      <v-layout class="shadow" row wrap>
        <v-flex xs12>
          <v-card color="yellow darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="welcome">Hot dog! Look at all that Bizz!</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm10 md6 v-for="business in allBusinesses" :key="business.id">
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row>
                <v-flex xs12>
                  <v-card-media id="pointer" @click="clickMethod(business.id)" :src="business.image" height="250px" width="250px" />
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div >
                      <h3 class="bizzcards">{{ business.company_name }} </h3>
                      <div class="description">What we're about: {{ business.description }} </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn class="view" flat color="green" @click="clickMethod(business.id)">
                      <v-icon large left light>account_circle</v-icon>
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

<script scoped>
  import axios from 'axios';
  import NavBarLoggedIn from './NavBarLoggedIn.vue';

  export default {
    data: () => ({

    }),
    components: {
      'nav-bar-logged-in': NavBarLoggedIn
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

<style scoped>
  .pics {
    height: 250px;
    width: 250px;
  }

  #pointer {
    cursor: pointer;
  }

  .welcome {
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 3em;
  }

  .bizzcards {
    font-family: 'Cabin Sketch', cursive;
  }
  .description {
    font-family: 'Montserrat', sans-serif;
  }
  .shadow{
    padding: 20px;
    -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  }
</style>
