import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        businesses: [
            {company: "company1", firs_name: "name1"},
            {company: "company2", firs_name: "name2"},
            {company: "company3", firs_name: "name3"},
            {company: "company4", firs_name: "name4"}
          ],
          influencers: [
            {company: "company1", firs_name: "name1"},
            {company: "company2", firs_name: "name2"},
            {company: "company3", firs_name: "name3"},
            {company: "company4", firs_name: "name4"}
          ] 
    }
});