<template>
  <div id="influencer-list">
    <div class="flowers">
      <div id="grey">
      <nav-bar-logged-in></nav-bar-logged-in>
      <div>
        <v-container>
          <v-layout row wrap>
            <v-flex xs6  column class="search-bar">
                <v-text-field 
                prepend-icon="search" 
                color="black" 
                hide-details single-line
                v-model="search"
                placeholder="search"
                label="search"
                ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
   
      <v-container column>
        <v-layout class="shadow" row wrap>
          <v-flex xs12>
            <v-card color="yellow darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="welcome">Find influencers to help create some BUZZ around your BIZZ</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 class="white" v-for="influencer in filteredBuzz" :key="influencer.id">
            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs10>
                    <v-card-media id="pointer" @click="clickMethod(influencer.id)" :src="influencer.image" height="250px" width="250px" />
                  </v-flex>
                  <v-flex x6 offset-6>
                    <v-card-title primary-title>
                      <div >
                        <h3 class="buzzcards">{{ influencer.personal_brand }} </h3>
                        <div class="description"> {{ influencer.description }} </div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn id="msgbtn" class="view" flat @click="clickMethod(influencer.id)">
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
    <foot></foot>
  </div>
</template>

<script>
  import axios from 'axios';
  import NavBarLoggedIn from './NavBarLoggedIn.vue';
  import Foot from './Foot.vue';

  export default {
   data() {
      return {
        search: '',
      }
    },
    components: {
      'nav-bar-logged-in': NavBarLoggedIn,
      'foot': Foot
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
      },
      filteredBuzz() {
        return this.$store.state.influencers.filter((influencer) => {
          return influencer.topics.includes(this.search.toLowerCase()) || influencer.city.includes(this.search.toLowerCase()) || influencer.state.includes(this.search.toLowerCase());
        })
      }
    },
    created() {
      this.$store.dispatch('LOAD_INFLUENCERS_LIST')
    },
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
  #msgbtn{
  color: rgb(154, 194, 108);
  }
  .search-bar {
  border-radius: 10px;
  background-color: rgba(202, 202, 202, 0.315);
  }
  /* .shadow{
    padding: 20px;
    -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  } */
</style>
