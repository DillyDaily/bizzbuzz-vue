import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        businesses: [],
        influencers: [],
        user_id: 0
    },
    actions: {
        LOAD_BUSINESSES_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            let parsedToken =  JSON.parse(storedToken)
            axios.get('/businesses?token='+parsedToken.token).then((response) => {
              commit('SET_BUSINESSES_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_INFLUENCERS_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            let parsedToken =  JSON.parse(storedToken)
            axios.get('/influencers?token='+parsedToken.token).then((response) => {
              commit('SET_INFLUENCERS_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_MESSAGES_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            let parsedToken =  JSON.parse(storedToken)
            axios.get('/messages?token='+parsedToken.token).then((response) => {
              commit('SET_MESSAGES_LIST', { list: response.data })
            }, (err) => {
              console.log(err)
            })
        },
        LOAD_USER_OBJECT: function({ commit }) {
            let storedToken = localStorage.getItem('token');
            let parsedToken = JSON.parse(storedToken);
            console.log('all the tests', parsedToken)
            commit('SET_USER_OBJECT', { user_id: parsedToken.user_id })
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
        },
        SET_USER_OBJECT: function(state, { user_id }) {
            console.log('user_id in mutations', user_id)
            state.user_id = user_id
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
        },
        loadedBuzzProfile (state) {
            return (profileID) => {
              return state.influencers.find((profile) => {
                return profile.id == profileID   
                console.log('profileID ', profileID) 
                })
            } 
        }
    }
});