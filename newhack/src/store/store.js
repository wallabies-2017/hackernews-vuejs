"use strict";
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
	debug: true,
	state: {
		username: '',
		password: '',
		posts: []
	},
	mutations: mutations,
	actions: actions,
	getters: getters
});
export default store;