export default {
	getPost: function(state, getters){
		return function(postId){
			var viewPost = state.posts;
			return viewPost.find(function(element){
				if (element.createdAt === postId){
					return element;
				}
			});
		};
	},
	getComment: function(state, getters){
		return function(postId, commentId){
			var post = getters.getPost(postId);
			if (post) {
				return post.comments.find(function(element){
					if (element.createdAt === commentId){
						return element;
					}
				});
			}
		};
	}
}