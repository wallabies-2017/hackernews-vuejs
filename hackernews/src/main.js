import Vue from 'vue'
import App from './App.vue'


import DataStore from './dataStore.js'

Vue.component("app", App);


new Vue({
  el: '#app',
  data:{
  	privateState:{},
  	sharedState: DataStore.state
  }
})
