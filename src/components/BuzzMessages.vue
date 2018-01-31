<template>
  <div id="messages">
    <h1>BUZZ MESSAGES - doesn't display all messages when clicked</h1>
    <nav-bar-logged-in-buzz></nav-bar-logged-in-buzz>
    <div class="flowers">
      <div id="grey">
        <v-container> 
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3 class="white">
                  <v-card transition="slide-x-transition">
                    <v-toolbar color="yellow darken-2" dark>
                      <v-toolbar-side-icon></v-toolbar-side-icon>
                      <v-toolbar-title>Inbox</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-layout row wrap>
                      <v-flex xs12 class="white" v-for="message in allMessages" :key="message.id">
                        <b>Convo with {{message.first_name}}</b>
                        <p> Most Recent Message {{ message.message }} </p> 
                        <div dark @click.stop="dialog = true">  
                        <v-btn @click="showMessages(message.businesses_id)">Hx</v-btn>
                        <div class="text-xs-right"> <v-btn flat @click="replyMessage(message.businesses_id)">Send New Message</v-btn></div>
                        <!-- <v-btn color="primary" dark @click.stop="dialog = true">Previous Messages</v-btn> -->
                        </div>
                      </v-flex>
                    </v-layout>
                  <v-dialog v-model="dialog" max-width="500px">
                    <v-card class="white">
                      <v-card-title>
                        <div v-if="showingMessages">
                          <div v-for="message in viewingMessages">
                            <p>Past messages: {{message.message}}</p>
                          </div>
                          <!-- <div class="text-xs-right"> <v-btn flat @click="replyMessage(message.influencers_id)">Send New Message</v-btn></div> -->
                        </div>
                      </v-card-title>
                      <v-card-actions>
                      <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
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
import NavBarLoggedInBuzz from './NavBarLoggedInBuzz.vue';
import axios from 'axios';
import Foot from './Foot.vue';

export default {
  components: {
      'nav-bar-logged-in-buzz': NavBarLoggedInBuzz,
      'foot' : Foot
    },
  created() {
    this.$store.dispatch('LOAD_BUZZ_MESSAGES_LIST')
  },

  props: ['id'],
  data(){
    return({
      showingMessages: false,
      viewingMessages: [],
      dialog: false
    })
  },
    methods:{
      showMessages:function(business_id){
        this.showingMessages = false;
        let storedToken = localStorage.getItem('token');
        let parsedToken =  JSON.parse(storedToken)
        console.log(parsedToken)
        axios.get(`/conversation/buzz/${business_id}/?token=${parsedToken.token}`).then((data)=>{
          console.log(data)
          this.viewingMessages = data.data;
          this.showingMessages = true;
        })
      },
    },
    replyMessage(businesses_id) {
      this.$router.push('/contact/buzz/'+ businesses_id)
    },

  computed: {
    allMessages() {
      return this.$store.state.buzz_messages
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