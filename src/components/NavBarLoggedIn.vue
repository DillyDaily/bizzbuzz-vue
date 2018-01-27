<template>
    <div id="nav-bar-logged-in">
      <v-layout>
        <v-toolbar class="top-nav" color="white">
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/BIZZBUZZ2.png"></v-toolbar-title>
            <v-spacer></v-spacer>

              <!-- <h1> {{ title }} </h1> -->
              <v-spacer></v-spacer>
              <!-- <v-layout> -->
              <v-badge overlap color="red">
                  <span slot="badge">3</span>
                    <v-avatar class="green" id="pointer" @click="mailbox">
                      <v-icon color="white">notifications</v-icon>
                    </v-avatar>
              </v-badge>
                  <v-avatar class="green" id="pointer" @click="profile">
                      <v-icon color="white">account_circle</v-icon>
                  </v-avatar>
              <!-- </v-layout> -->
        </v-toolbar>
      </v-layout>
    </div>
</template>

<script>

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
      profile(id) {
        this.$router.push('/my/bizz/profile/'+this.$store.state.user_id)
      },
      mailbox(id) {
        this.$router.push('/my/messages/'+this.$store.state.user_id)
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
  padding-left: 7%;
  padding-right: 7%;
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

</style>

