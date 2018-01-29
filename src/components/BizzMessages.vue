<template>
  <div id="messages">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
           <v-flex xs12 sm10 md6 class="white" v-for="message in allMessages" :key="message.id">
            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs12>
                    <v-card-media id="pointer" @click="clickMethod(message.id)" :src="message.image" height="250px" width="250px" />
                  </v-flex>
                  <v-flex>
                    <v-card-title primary-title>
                      <div >
                        <h3 class="bizzcards">{{ message.message }} </h3>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn id="msgbtn" class="view" flat @click="clickMethod(message.id)">
                        <v-icon large left light>account_circle</v-icon>
                        View Profile</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import NavBarLoggedIn from './NavBarLoggedIn.vue';
import axios from 'axios';
import Foot from './Foot.vue';


export default {

  components: {
      'nav-bar-logged-in': NavBarLoggedIn,
      'foot': Foot
    },
  created() {
    this.$store.dispatch('LOAD_BIZZ_MESSAGES_LIST')
  },

  props: ['id'],

  computed: {
    allMessages() {
      console.log('is this hitting???', this.$store.state.bizz_messages)
      return this.$store.state.bizz_messages
    }
  },
}
</script>

<style scoped>
#grey {
  background-color: rgba(255, 255, 255, 0.637);
  background-size: cover;
  height: 800px;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
}

</style>