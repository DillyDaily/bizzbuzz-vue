<template>
  <div id="influencer-list">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
      <v-container column>
        <v-layout class="shadow" row wrap>
          <v-flex xs12>
            <v-card color="yellow darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="welcome">Hot dog! Look at all that buzz!</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 class="white" v-for="influencer in allInfluencers" :key="influencer.id">
            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs12>
                    <v-card-media id="pointer" @click="clickMethod(influencer.id)" :src="influencer.image" height="250px" width="250px" />
                  </v-flex>
                  <v-flex>
                    <v-card-title primary-title>
                      <div >
                        <h3 class="buzzcards">{{ influencer.personal_brand }} </h3>
                        <div class="description">What we're about: {{ influencer.description }} </div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn class="view" flat color="green" @click="clickMethod(influencer.id)">
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
    </div>
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
        this.$router.push('/profile/buzz/' + id)
      }
    },
    computed: {
      allInfluencers() {
        console.log("allInfluencers", this.$store.state.influencers)
        return this.$store.state.influencers
      }
    },
    created() {
      this.$store.dispatch('LOAD_INFLUENCERS_LIST')
    },
    mounted() {}
  }

</script>

<style scoped>
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
} 
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

  .buzzcards {
    font-family: 'Cabin Sketch', cursive;
  }
  .description {
    font-family: 'Montserrat', sans-serif;
  }
  /* .shadow{
    padding: 20px;
    -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  } */
</style>
