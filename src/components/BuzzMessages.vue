<template>
  <div id="messages">
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <div class="flowers">
      <div id="grey">
        <v-container>
          <v-layout>
            <v-flex>
            <v-expansion-panel>
              <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                <div slot="header">Item</div>
                <v-card>
                  <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
import axios from 'axios';

export default {
  components: {
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz
    },
  created() {
    this.$store.dispatch('LOAD_BUZZ_MESSAGES_LIST')
  },

  props: ['id'],

  computed: {
    oneProfile() {
      // console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
      return this.$store.getters.loadedBuzzProfile(this.id)
    }
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

</style>