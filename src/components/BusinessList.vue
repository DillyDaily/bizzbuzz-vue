<template>
  <div id="business-list">
    <div id="nav-bar-logged-in">
      <v-layout>
        <v-toolbar class="top-nav" color="white">
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/BIZZBUZZ2.png"></v-toolbar-title>
            <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <!-- <v-layout> -->
              <v-badge overlap color="red">
                  <span slot="badge">3</span>
                    <v-avatar class="green" id="pointer" @click="mailbox">
                      <v-icon color="white">notifications</v-icon>
                    </v-avatar>
              </v-badge>
                  <v-avatar class="green" id="pointer" @click="profile">
                      <v-icon color="white">account_circle</v-icon>
                  </v-avatar>
              <!-- </v-layout> -->
        </v-toolbar>
      </v-layout>
    </div>


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

  export default {
    data(){
      return {
        title: "Bizz Buzz Media",
      }
    },
    components: {
     
    },
    methods: {
      clickMethod(id) {
        this.$router.push('/profile/bizz/' + id)
      },
      home() {
        this.$router.push('/')
      },
      profile(id) {
        this.$router.push('/my/bizz/profile/'+this.$store.state.user_id)
      },
      mailbox(id) {
        this.$router.push('/my/messages/'+this.$store.state.user_id)
      }
    },
    computed: {
      allBusinesses() {
        console.log("allBusinesses", this.$store.state.businesses)
        return this.$store.state.businesses
      },
      // oneProfile() {
      //   console.log('ONE Profile is this hitting???', this.$store.state.user_id)
      //   return this.$store.state.user_id
      // }
    },
    created() {
      this.$store.dispatch('LOAD_BUSINESSES_LIST')
      this.$store.dispatch('LOAD_INFLUENCERS_LIST')
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
  h1{
  font-family: 'Cabin Sketch', cursive;
  font-size: 3em;
  color: #222;
}
.top-nav {
  height: 6em;
  padding-top: 1%;
  padding-left: 7%;
  padding-right: 7%;
}
#bee1{
  height:3em;
}
  .shadow{
    padding: 20px;
    -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
    box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  }
</style>
