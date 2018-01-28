<template>
  <div>
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <div class="flowers">
      <div id="grey">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="yellow darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="welcome">This is my Profile</div>
                  <v-spacer></v-spacer>
                    <v-dialog width="350px" persistent>
                          <v-btn class="grey" fab accent slot="activator" >
                            <v-icon>edit</v-icon>
                          </v-btn>
                          <v-card>
                            <v-container>
                              <v-layout row wrap>
                                <v-flex xs12>
                                  <v-card-title>Edit Profile</v-card-title>
                                </v-flex>
                              </v-layout>
                              <v-divider></v-divider>
                            </v-container>
                          </v-card>
                        </v-dialog>

                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card dark color="secondary">
                <v-card-text class="px-0">PICTURE</v-card-text>
                <!-- <v-card-media id="pointer" @click="clickMethod(business.id)" :src="business.image" height="250px" width="250px" /> -->
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card dark color="secondary">
                <v-card-text class="px-0">TEXT</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
     <foot></foot>
    </div>
  </div>
</template>

<script>
import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
  import Foot from './Foot.vue';

export default {
    
    components: {
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
      'foot': Foot
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
  #pointer {
    cursor: pointer;
  }
</style>
