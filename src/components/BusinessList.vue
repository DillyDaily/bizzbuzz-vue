<template>
  <div id="business-list">
    <simple-nav></simple-nav>
    <h1>Get All Businesses</h1>
            <v-layout row wrap>
            <v-flex xs12>
            <v-card color="yellow darken-2" class="white--text">
                <v-card-title primary-title>
                <div class="welcome">Hot dog! Look at all that Bizz!</div>
                </v-card-title>
            </v-card>
            </v-flex>
        </v-layout>
        <!-- <div v-for="business in Businesses" class="single-business">
            <h2>COMPANY name: {{ business.company_name }}</h2>
            <h3>FIRST name: {{ business.first_name }} </h3>
            <img src={{ business.image }}>
        </div> -->
        <div>OPEN Bizz: {{ allBusinesses }}</div>
    
  </div>
</template>

<script>
import axios from 'axios';
import SimpleNav from './SimpleNav.vue';

export default {
    data () {
        return {
            businesses: []
      }
    },
    components: {
      'simple-nav': SimpleNav
    },
    methods: {
    
    },
    computed: {
        allBusinesses() {
            console.log("allBusinesses", this.$store.state)
            return this.$store.state.businesses
        }
    },

    created () {
        this.$store.dispatch('LOAD_BUSINESSES_LIST')
    },
    mounted () {
        // axios.get('http://localhost:8000/businesses')
        // .then((response) => {
        //     console.log('axios response: ', response.data)
        //     this.Businesses = response.data;
        // })
        // console.log('BizzList component mounted')
    }
}

</script>
