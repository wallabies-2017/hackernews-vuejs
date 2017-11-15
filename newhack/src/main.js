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

Vue.component("add-comment", AddComment);
Vue.component("comment-item", CommentItem);
Vue.component("comment-summary", CommentSummary);
Vue.component("create-post", CreatePost);
Vue.component("edit-comment", EditComment);
Vue.component("edit-post", EditPost);
Vue.component("post-item", PostItem);
Vue.component("post-summary", PostSummary);
Vue.component("registration", Registration);

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