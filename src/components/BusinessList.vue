<template>
  <div id="business-list">
    <div class="flowers">
    <div id="grey">
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
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
                <div class="welcome">Here you can find BIZZ-nesses to BUZZ about</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 class="white" v-for="business in filteredBizz" :key="business.id">
            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs6>
                    <v-card-media id="pointer" @click="clickMethod(business.id)" :src="business.image" height="250px" width="250px" />
                  </v-flex>
                  <v-flex xs6 offset-6>
                    <v-card-title primary-title>
                      <div >
                        <h3 class="bizzcards">{{ business.company_name }} </h3>
                        <div class="description"> {{ business.description }} </div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn id="msgbtn" class="view" flat @click="clickMethod(business.id)">
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
  import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
  import Foot from './Foot.vue';

  export default {
    data() {
      return {
        search: '',
      }
    },
    components: {
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
      'foot': Foot
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
      },
      filteredBizz() {
        return this.$store.state.businesses.filter((business)=> {
          return business.topics.includes(this.search.toLowerCase()) || business.city.includes(this.search.toLowerCase()) || business.state.includes(this.search.toLowerCase());
          // return business.topics.includes(this.search.toLowerCase()) || business.city.includes(this.search.toLowerCase()) || business.state.includes(this.search.toLowerCase());
        })
      }
    },
    created() {
      this.$store.dispatch('LOAD_BUSINESSES_LIST')
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
    display:flex;
    justify-content: center;
  }

  .bizzcards {
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
</style>
