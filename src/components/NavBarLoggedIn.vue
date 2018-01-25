<template>
    <div id="nav-bar-logged-in">
      <v-toolbar color="white">
        <v-toolbar-title class="black--text" id="pointer" @click="clickMethod"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
          <v-spacer></v-spacer>
            <h1> {{ title }} </h1>
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
    </div>
</template>

<script>

export default {
    data(){
      return {
        title: "Bizz Buzz Media",
      }
    },
    created() {
        this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },

    props: ['id'],

    computed: {
        oneProfile() {
            console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
        return this.$store.getters.loadedProfile(this.id)
      }
    },
    methods: {
        clickMethod() {
        this.$router.push('/')
        },
        profile(id) {
            this.$router.push('/my/profile/' + id)
        },
                    mailbox(id) {
                    this.$router.push('/my/messages/' + id)
                    },
    },
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
#pointer {
  cursor: pointer;
}

</style>

