import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        allBusinesses: []
    },
    actions: {
        LOAD_BUSINESSES_LIST: function ({ commit }) {
            axios.get('/businesses').then((response) => {
              commit('SET_BUSINESSES_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
          }
        },
    mutations: {
        SET_BUSINESSES_LIST: (state, { list }) => {
            state.businesses = list
            console.log('MUTATIONS LIST', list)
        }
    },
    getters: {
        openBusinesses: state => {
            return 
            // console.log('****HOLY SHIT SOMETHING IS WORKING****')
            // state.businesses
            console.log("WHAT IS THIS ",state.businesses.filter(business => !business.completed))
            // state.businesses.filter(business => !business.completed)
            }
    },
});