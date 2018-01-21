import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    actions: {
        // LOAD_BUSINESSES_LIST: function ({ commit }) {
        //     axios.get('/localhost/8080/businesses').then((response) => {
        //       commit('SET_PROJECT_LIST', { list: response.data })
        //     }, (err) => {
        //       console.log(err)
        //     })
        //   }
        },
    mutations: {
        // SET_BUSINESSES_LIST: (state, { list }) => {
        //     state.businesses = list
        // }
    },
    getters: {
        // openBusinesses: state => {
        //     return state.businesses.filter(business => !business.completed)
        //     }
    },
});