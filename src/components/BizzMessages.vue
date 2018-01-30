<template>
  <div id="messages">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">

            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card transition="slide-x-transition">
                    <v-toolbar color="yellow darken-2" dark>
                      <v-toolbar-side-icon></v-toolbar-side-icon>
                      <v-toolbar-title>Inbox</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>search</v-icon>
                      </v-btn>
                    </v-toolbar>
                    
                    <v-list three-line>
                    <v-flex xs12 class="white" v-for="message in allMessages" :key="message.id">
                      <b>{{message.first_name}}</b>
                    <span class="bizzcards" @click="showMessages(message.influencers_id)">{{ message.message }} </span>   
                    <div class="text-xs-right"> <v-btn flat @click="replyMessage(message.influencers_id)">reply</v-btn></div>
                    </v-flex>
                      
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>

              <div v-if="showingMessages">
                <div v-for="message in viewingMessages">
                  <p>{{message.message}}</p>
                </div>
              </div>

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
      viewingMessages:[]
    })
  },
  methods:{
    showMessages:function(influencer_id){
      this.showingMessages = false;
      let storedToken = localStorage.getItem('token');
      let parsedToken =  JSON.parse(storedToken)
      console.log(parsedToken)
      axios.get(`/conversation/bizz/${influencer_id}/?token=${parsedToken.token}`).then((data)=>{
        console.log(data)
        this.viewingMessages = data.data;
        this.showingMessages = true;
      })
    },
    replyMessage: function() {
      
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
  height: 800px;
  } 
.flowers {
  background-image: url("../assets/beeplant.jpg");
  background-size: cover;
}

</style>