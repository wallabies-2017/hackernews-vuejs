import Vue from 'vue';
import AddComment from './components/AddComment.vue';
import CommentItem from './components/CommentItem.vue';
import CommentSummary from './components/CommentSummary.vue';
import CreatePost from './components/CreatePost.vue';
import EditComment from './components/EditComment.vue';
import EditPost from './components/EditPost.vue';
import PostItem from './components/PostItem.vue';
import PostSummary from './components/PostSummary.vue';
import Registration from './components/Registration.vue';

import store from './store/store';

new Vue({
  el: '#app',
  store: store,
  data: {
  	privateState: {
  		mode: {
  			edit: false,
  			detail: false
  		}
  	},
  	sharedState: store.state
  }
});