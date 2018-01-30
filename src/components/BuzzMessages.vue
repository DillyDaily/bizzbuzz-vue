<template>
  <div id="messages">
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <div class="flowers">
      <div id="grey">

        <v-container>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-toolbar color="yellow darken-2" dark>
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Inbox</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-expansion-panel>
                  <v-expansion-panel-content v-for="message in allMessages" :key="message.id">
                    <div slot="header">From: {{ message.first_name }}</div>
                    <v-card>
                      <div>
                      <v-card-text class="grey lighten-3"> {{ message.message }} 
                        <v-btn flat @click="replyMessage(message.influencers_id)">Reply</v-btn>
                        </v-card-text>
                    </div>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-card>
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
    // oneProfile() {
    //   // console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
    //   return this.$store.getters.loadedBuzzProfile(this.id)
    allMessages() {
      return this.$store.state.buzz_messages
    }
  },
  methods:{
    showMessages:function(business_id){
      this.showingMessages = false;
      let storedToken = localStorage.getItem('token');
      let parsedToken =  JSON.parse(storedToken)
      console.log(parsedToken)
      axios.get(`/conversation/bizz/${business_id}/?token=${parsedToken.token}`).then((data)=>{
        console.log(data)
        this.viewingMessages = data.data;
        this.showingMessages = true;
      })
    },
}
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