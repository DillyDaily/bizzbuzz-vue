<template>
  <div id="profile-bizz">
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
      <div class="flowers">
        <div id="grey">
          <v-container grid-list-md text-xs-center class="shadow">
            <v-layout row wrap class="white">

              <v-flex xs12>
                <v-card color="yellow darken-2" class="black--text">
                  <v-card-title primary-title>
                    <div class="welcome">Bizz Profile</div>
                  </v-card-title>
                </v-card>
              </v-flex>

                  <v-flex xs6>
                    <v-card>
                      <v-card-media :src="oneProfile.image" height="400px" width="400px"></v-card-media>  
                    </v-card>
                  </v-flex>
                    <v-flex xs6 offset-6>
                      <div class="profile-card">
                        <v-card-text>
                            <div><b>Company Name:</b> {{ oneProfile.company_name }} </div>
                            <br>
                            <div><b>Description:</b> {{ oneProfile.description }} </div>
                            <br>
                            <div><b>Website:</b> {{ oneProfile.category }} </div>
                            <br>
                            <div><b>Relevant Topics:</b> {{ oneProfile.topics }} </div>
                            <br>
                            <div><b>Contact:</b> {{ oneProfile.first_name }} </div>
                        </v-card-text>
                      </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn id="msgbtn" flat @click="clickMethod(oneProfile.id)">
                            <v-icon left light>send</v-icon>
                          Message</v-btn>
                        </v-card-actions>
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
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
       'foot': Foot
    },
    methods: {
      clickMethod(id) {
        this.$router.push('/contact/buzz/' + id)
      }
    }
  }

</script>

<style scoped>
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  height: 900px;
} 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
} 
#msgbtn{
  color: rgb(154, 194, 108);
}
.profile-card{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  padding-top: 4%;
}
.shadow{
  padding: 10%;
}
.welcome {
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 3vw;
  color: white !important;
}
</style>
