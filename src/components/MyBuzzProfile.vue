<template>
  <div>
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <h1>This is my Profile</h1>

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