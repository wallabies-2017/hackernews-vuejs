export default {
	createPost: function(context, payload){
		var basePost = {
			title: null,
    		content: null,
    		createdAt: +(new Date()),
    		updatedAt: +(new Date()),
    		username: null,
    		comments: []
		};
		context.commit("createPost", Object.assign(basePost, payload))
	},
	editPost: function(context, payload){
		var post = context.getters.getPost(payload.post.createdAt);
		if (!post){
			return false;
		}
		var cleanData = {}
		if (payload.data.hasOwnProperty('title')){
			cleanedData.name = payload.data.title
		}
		if (payload.data.hasOwnProperty('content')){
			cleanedData.name = payload.data.content
		}
		if (cleanedData){
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
    		content: null,
    		createdAt: +(new Date()),
    		updatedAt: +(new Date()),
    		username: null,
		};
		context.commit("addComment", {
			obj: post,
			data: Object.assign(baseComment, payload)
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
			target: payload.todo.createdAt
		});
	}
}