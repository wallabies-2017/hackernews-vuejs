export default {
	createPost: function(state, payload){
		this.state.posts.push(payload);
	},
	editPost: function(state, payload){
		date = +(new Date())
		Vue.set(payload.obj, 'updatedAt', date);
		if (payload.data.hasOwnProperty('title')){
			Vue.set(payload.obj, 'title', payload.data.title);
		}
		if (payload.data.hasOwnProperty('content')){
			Vue.set(payload.obj, 'content', payload.data.content);
		}
	},
	addComment: function(state, payload){
		this.state.comments.push(payload.data);
	},
	editComment: function(state, payload){
		if (payload.data.hasOwnProperty('content')){
			date = +(new Date())
			Vue.set(payload.obj, 'updatedAt', date);
			Vue.set(payload.obj, 'content', payload.data.content);
		}
	},
	deleteComment: function(state, payload){
		_.remove(payload.obj.todos, function(value){
			return value._id === payload.target;
		});
	}
}