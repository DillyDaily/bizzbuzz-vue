<template>
    <div id="nav-bar-logged-in">
      <v-layout>
        <v-toolbar class="top-nav" color="white">
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/BIZZBUZZ2.png"></v-toolbar-title>       
           <v-spacer></v-spacer>
            <v-avatar class="grey lighten-1" id="pointer" @click="dashboard">
                <v-icon color="white">dashboard</v-icon>
            </v-avatar>
          <v-badge overlap color="red">
            <span slot="badge">3</span>
              <v-avatar class="grey lighten-1" id="pointer" @click="mailbox">
                <v-icon color="white">mail</v-icon>
              </v-avatar>
          </v-badge>
            <v-avatar class="grey lighten-1" id="pointer" @click="profile">
                <v-icon color="white">account_circle</v-icon>
            </v-avatar>
            <v-avatar class="grey lighten-1" id="pointer" @click="userLogout">
                <v-icon color="white">more_vert</v-icon>
            </v-avatar>
        </v-toolbar>
      </v-layout>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return {
        title: "Bizz Buzz Media",
      }
    },

    methods: {
      home() {
        this.$router.push('/')
        },
      dashboard() {
        this.$router.push('/influencers')
        },
      profile(id) {
        let storedToken = localStorage.getItem('token');
        let parsedToken =  JSON.parse(storedToken)

        this.$router.push(`/my/bizz/profile/${parsedToken.user_id}`)
      },
      mailbox(id) {
        let storedToken = localStorage.getItem('token');
        let parsedToken =  JSON.parse(storedToken)

        this.$router.push(`/my/bizz/messages/${parsedToken.user_id}`)
       
      },
      userLogout() {
          localStorage.removeItem("token");
          this.$router.push('/')
      }
    },
}
</script>

<style scoped>
h1{
  font-family: 'Cabin Sketch', cursive;
  font-size: 3em;
  color: #222;
}
.top-nav {
  height: 6em;
  padding-top: 1%;
  padding-left: 15%;
  padding-right: 15%;
}
#bee1{
  height:3em;
}
.shadow{
  padding: 20px;
  -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
}
.welcome {
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 2vw;
}
#pointer {
  cursor: pointer;
}
.search-bar {
  border-radius: 20px;
  background-color: #BDBDBD;
  height: 4em;
  width: 50%
}
</style>

