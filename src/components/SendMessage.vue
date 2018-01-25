<template>
  <div id="send-message">
    <simple-nav></simple-nav>
      <h2>Send A Message</h2>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <form class="shadow">
            <input type="textarea" name="message" v-model="bizz.message" placeholder="message" required/>
            <button @click.prevent="send"> Send </button>
          </form>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';

export default {
  data () {
    return {
    bizz: {
        message: '',
        error: null
      }
     }
    },
  components: {
      'simple-nav': SimpleNav
    },
  methods: {
      send() {
          this.axios.post('/contact/:id', {
              message: this.bizz.message,
          }) 
              this.$router.push('/businesses')
      }
    }
}
</script>

<style>


</style>