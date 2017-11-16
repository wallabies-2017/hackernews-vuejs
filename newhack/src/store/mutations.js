import Vue from 'vue';

export default {
	register: function(state, payload){
		this.state.username = payload.username;
		this.state.password = payload.password;
		this.state.session = true;
	},
	createPost: function(state, payload){
		this.state.posts.push(payload);
	},
	editPost: function(state, payload){
		var upDate = +(new Date())
		Vue.set(payload.obj, 'updatedAt', upDate);
		if (payload.data.hasOwnProperty('title')){
			Vue.set(payload.obj, 'title', payload.data.title);
		}
		if (payload.data.hasOwnProperty('content')){
			Vue.set(payload.obj, 'content', payload.data.content);
		}
	},
	addComment: function(state, payload){
		payload.obj.comments.push(payload.data);
	},
	editComment: function(state, payload){
		console.log(payload.obj.content);
		if (payload.data.hasOwnProperty('content')){
			var upDate = +(new Date());
			Vue.set(payload.obj, 'updatedAt', upDate);
			Vue.set(payload.obj, 'content', payload.data.content);
		}
	},
	deleteComment: function(state, payload){
		_.remove(payload.obj.comments, function(value){
			return value._id === payload.target;
		});
	}
}