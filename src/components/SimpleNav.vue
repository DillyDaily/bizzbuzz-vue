<template>
    <div id="simple-nav">
        <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="black--text"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
            <v-spacer></v-spacer>
                <h1> {{ title }} </h1>
                <!-- <router-link to ="/" exact tag="img" src="../assets/bee1.png"></router-link> -->
                <!-- <router-link to ="/" exact tag="button">HOME</router-link> -->
        </v-toolbar>
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

    },
    computed: {

    }
}
</script>

<style scoped>
h1{
  font-family: 'Cabin Sketch', cursive;
  color: #222;
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

</style>

