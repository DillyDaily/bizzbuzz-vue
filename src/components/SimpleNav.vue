<template>
    <div id="nav-bar-logged-in">
      <v-layout>
        <v-toolbar class="top-nav" color="white">
          <!-- <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title> -->
          <v-toolbar-title class="black--text" id="pointer" @click="home"><img id="bee1" src="../assets/BIZZBUZZ2.png"></v-toolbar-title>
        </v-toolbar>
      </v-layout>
    </div>
</template>

<script>

export default {
    methods: {
      home() {
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
  padding-left: 7%;
  padding-right: 7%;
  display:flex;
  justify-content: center;  
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

