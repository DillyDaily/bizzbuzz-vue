<template>
    <div id="simple-nav">
        <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="black--text"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
                <h1> {{ title }} </h1>
                <v-btn icon>
                    <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
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

