export default {
	register: function(context, payload){
		var baseUser = {
			username: null,
			password: null
		};
		context.commit("register", Object.assign(baseUser, payload));
	},
	createPost: function(context, payload){
		var basePost = {
			_id: +(new Date()),
			title: null,
			content: null,
			username: null,
			createdAt: +(new Date()),
			updatedAt: +(new Date()),
			downVote: 0,
			upVote: 0,
			comments: []
		};
		context.commit("createPost", Object.assign(basePost, payload));
	},
	editPost: function(context, payload){
		var post = context.getters.getPost(payload.post.createdAt);
		console.log('actions payload', payload.data);
		if (!post){
			return false;
		}
		var cleanedData = {}
		if (payload.data.hasOwnProperty('title')){
			cleanedData.name = payload.data.title
		}
		if (payload.data.hasOwnProperty('content')){
			cleanedData.name = payload.data.content
		}
		if (cleanedData){
			console.log('actions cleanedData', cleanedData);
			cleanedData.updatedAt = +(new Date())
			context.commit("editPost", {
				obj: post,
				data: cleanedData
			});
			return true;
		}
		return false;
	},
	addComment: function(context, payload){
		var post = context.getters.getPost(payload.post.createdAt);
		if (!post){
			return false;
		}
		var baseComment = {
			_id: +(new Date()),
			content: null,
			username: null,
			createdAt: +(new Date()),
			updatedAt: +(new Date()),
			upVote: 0,
			downVote: 0
		};
		context.commit("addComment", {
			obj: post,
			data: Object.assign(baseComment, payload.data)
		});
		return true;
	},
	editComment: function(context, payload){
		var comment = context.getters.getPost(payload.post.createdAt, payload.comment.createdAt);
		if (!comment){
			return false;
		}
		var cleanedData = {};
		if (payload.data.hasOwnProperty('content')){
			cleanedData.name = payload.data.content
		}
		if (cleanedData){
			cleanedData.updatedAt = +(new Date())
			context.commit("editPost", {
				obj: comment,
				data: cleanedData
			});
			return true;
		}
		return false;
	},
	deleteComment: function(context, payload){
		var post = context.getters.getPost(payload.post.createdAt)
		if (!post){
			return false;
		}
		context.commit("deleteComment", {
			obj: post,
			target: payload.comment.createdAt
		});
	}
}