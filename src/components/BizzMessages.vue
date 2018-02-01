<template>
  <div id="messages">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
          <v-container class="shadow"> 
            <v-layout row class="top-pad">
                <v-flex xs12 sm6 offset-sm3 class="white">
                  <v-card transition="slide-x-transition">
                    <v-toolbar class="inbox-header" color="yellow darken-2" dark>
                      <v-toolbar-side-icon></v-toolbar-side-icon>
                      <v-toolbar-title class="welcome">Inbox</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-layout row wrap class="inbox-body">
                      <v-flex xs12 class="white" v-for="message in allMessages" :key="message.id">
                        <div class="inbox-chat">Keep chatting with {{message.first_name}}</div>
                        
                        <div class="mssg-bubble" dark @click.stop="dialog = true">
                         <v-list-tile-title class="pointer" flat @click="showMessages(message.influencers_id)" >{{ message.message }} </v-list-tile-title> 
                        </div>
                        <div >  
                        <!-- <v-btn flat @click="showMessages(message.influencers_id)">Show Convo</v-btn> -->
                        <div class="text-xs-right"> 
                          <v-btn id="msgbtn" flat @click="replyMessage(message.influencers_id)">
                            <v-icon left light>send</v-icon>Send New Message</v-btn>
                          </div>
                        <v-divider id="divide-pad" class="grey lighten-2"></v-divider>
                        <!-- <v-btn color="primary" dark @click.stop="dialog = true">Previous Messages</v-btn> -->
                        </div>

                      </v-flex>
                    </v-layout>
                  <v-dialog v-model="dialog" max-width="500px">
                    <v-card class="white">
                      <v-card-title>
                        <div v-if="showingMessages">
                          <div v-for="message in viewingMessages">
                          
                              <span><v-icon>comment</v-icon></span>
                            
                            <span> {{message.message}}</span>
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
  data(){
    return({
      showingMessages: false,
      viewingMessages:[],
      dialog: false,
    })
  },
  methods:{
    showMessages:function(influencer_id){
      this.showingMessages = false;
      let storedToken = localStorage.getItem('token');
      let parsedToken =  JSON.parse(storedToken)
      // console.log(parsedToken)
      axios.get(`/conversation/bizz/${influencer_id}/?token=${parsedToken.token}`).then((data)=>{
        // console.log(data)
      this.viewingMessages = data.data;
      this.showingMessages = true;
      })
    },
    replyMessage(influencers_id) {
      this.$router.push('/contact/bizz/' + influencers_id)
    }
  },
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
  /* height: 900px; */
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
  }
.shadow{
    padding: 10% .5%;
  }
.welcome {
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 3vw;
    color: white;
  }
.inbox-header{
    padding: 4% 1%;
  }
.inbox-body{
    padding: 5% 1%;
  }
#divide-pad{
    margin-bottom: 4%;
  }
#msgbtn{
  color: rgb(154, 194, 108);
  }
.mssg-bubble {
  background-color: rgb(76, 158, 252);
  border-radius: 20px;
  color: white;
  padding: 6%;
  margin: 3%;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  }
  .inbox-chat {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  }
   .pointer {
   cursor: pointer;
  }
</style>