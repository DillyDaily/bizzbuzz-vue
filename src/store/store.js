import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        businesses: [],
        influencers: []
    },
    actions: {
        LOAD_BUSINESSES_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            axios.get('/businesses?token='+storedToken).then((response) => {
              commit('SET_BUSINESSES_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_INFLUENCERS_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            axios.get('/influencers?token='+storedToken).then((response) => {
              commit('SET_INFLUENCERS_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_MESSAGES_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            axios.get('/messages?token='+storedToken).then((response) => {
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
        loadedProfile (state) {
            return (profileID) => {
              return state.businesses.find((profile) => {
                return profile.id == profileID   
                console.log('profileID ', profileID) 
                })
            } 
        }
    }
});