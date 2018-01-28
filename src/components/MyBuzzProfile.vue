<template>
  <div>
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <h1>This is my Profile</h1>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 v-for="i in 2" :key="i">
            <v-card dark color="secondary">
              <v-card-text class="px-0">6</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    <v-dialog width="350px" persistent>
      <v-btn fab accent slot="activator" >
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