<template>
  <div id="messages">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">

            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-toolbar color="cyan" dark>
                      <v-toolbar-side-icon></v-toolbar-side-icon>
                      <v-toolbar-title>Inbox</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>search</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-list three-line>

                    <v-flex xs12 sm10 md6 class="white" v-for="message in allMessages" :key="message.id">
                    <span class="bizzcards">{{ message.message }} </span>   
                    <v-btn flat>reply</v-btn>
                    </v-flex>
                      
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>

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