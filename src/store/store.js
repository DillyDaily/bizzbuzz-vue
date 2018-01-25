import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        businesses: [],
        influencers: [],
        // id: []
    },
    actions: {
        LOAD_BUSINESSES_LIST: function ({ commit }) {
            axios.get('/businesses').then((response) => {
              commit('SET_BUSINESSES_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_INFLUENCERS_LIST: function ({ commit }) {
            axios.get('/influencers').then((response) => {
              commit('SET_INFLUENCERS_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_MESSAGES_LIST: function ({ commit }) {
            axios.get('/messages').then((response) => {
              commit('SET_MESSAGES_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        }
    },
    mutations: {
        SET_BUSINESSES_LIST: (state, { list }) => {
            state.businesses = list
            console.log('businesses list ', state.businesses)
        },
        SET_INFLUENCERS_LIST: (state, { list }) => {
            state.influencers = list
            console.log('influencers list ', state.influencers)
        },
        SET_MESSAGES_LIST: (state, { list }) => {
            state.messages = list
            console.log('messages list ', state.messages)
        }
    },
    getters: {
        loadedProfiles (state) {
            return state.loadedProfiles
        },
        loadedProfile (state) {
            return (profileID) => {
              return state.loadedProfiles.find((profile) => {
                return profile.id == profileID    
                })
            }
        }
    }
});