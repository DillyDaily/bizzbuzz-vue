import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        businesses: [],
        influencers: [],
        user_id: 0,
        bizz_messages: [],
        buzz_messages: []
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
        LOAD_BIZZ_MESSAGES_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            let parsedToken =  JSON.parse(storedToken)
            console.log('parsed Token: ', parsedToken)
            axios.get(`/my/bizz/messages/${parsedToken.user_id}?token=${parsedToken.token}`)
                .then((response) => {
                    commit('SET_BIZZ_MESSAGES_LIST', { list: response.data })
                }, (err) => {
                    console.log(err)
                })
        },
        LOAD_BUZZ_MESSAGES_LIST: function ({ commit }) {
            let storedToken = localStorage.getItem('token');
            let parsedToken =  JSON.parse(storedToken)
            axios.get(`/my/buzz/messages/${parsedToken.user_id}?token=${parsedToken.token}`)
                .then((response) => {
                    commit('SET_BUZZ_MESSAGES_LIST', { list: response.data })
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
        SET_BIZZ_MESSAGES_LIST: (state, { list }) => {
            state.bizz_messages = list
            console.log('bizz messages list ', state.bizz_messages)
        },
        SET_BUZZ_MESSAGES_LIST: (state, { list }) => {
            state.buzz_messages = list
            console.log('buzz messages list ', state.buzz_messages)
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
        },
        loadedBizzMessages (state) {
            return (messageID) => {
              return state.bizz_messages.find((message) => {
                return message.id == messageID
                console.log('BIZZ messageID ', messageID)
                })
            }
        },
        loadedBuzzMessages (state) {
            return (messageID) => {
              return state.buzz_messages.find((message) => {
                return message.id == messageID
                console.log('BUZZ messageID ', messageID)
                })
            }
        }
    }
});