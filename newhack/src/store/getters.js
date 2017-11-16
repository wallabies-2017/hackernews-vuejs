export default {
	getPost: function(state, getters){
		console.log(state, 'state in getter')
		console.log(getters, 'getters in getter')
		return function(postId){
			var viewPost = state.posts;
			console.log(viewPost, 'state.posts in getter')
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