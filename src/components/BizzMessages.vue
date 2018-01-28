<template>
  <div id="messages">
    <nav-bar-logged-in></nav-bar-logged-in>
    <div class="flowers">
      <div id="grey">
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-toolbar color="yellow darken-2" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <!-- <v-toolbar-title>{{ oneMessage.message }}</v-toolbar-title> -->
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn> -->
                <!-- <v-btn icon>
                  <v-icon>check_circle</v-icon>
                </v-btn> -->
              </v-toolbar>
              <v-list two-line>
                <template v-for="(item, index) in items">
                  <v-list-tile
                    avatar
                    ripple
                    @click="toggle(index)"
                    :key="item.title"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
                      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                      <v-icon
                        color="grey lighten-1"
                        v-if="selected.indexOf(index) < 0"
                      >star_border</v-icon>
                      <v-icon
                        color="yellow darken-2"
                        v-else
                      >star</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-divider v-if="index + 1 < items.length" :key="item.title"></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLoggedIn from './NavBarLoggedIn.vue';
import axios from 'axios';

export default {
  data () {
      return {
        selected: [2],
        items: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ]
      }
    },
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    },

  components: {
      'nav-bar-logged-in': NavBarLoggedIn
    },
  created() {
    this.$store.dispatch('LOAD_BIZZ_MESSAGES_LIST')
  },

  props: ['id'],

  computed: {
    oneMessage() {
      console.log('is this hitting???', this.$store.getters.loadedProfile(this.id))
      return this.$store.getters.loadedBizzMessages(this.id)
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