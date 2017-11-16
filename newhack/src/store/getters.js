export default {
	getPost: function(state, getters){
		return function(postId){
			var viewPost = state.posts;
			console.log(viewPost, 'state.posts in post getter')
			return viewPost.find(function(element){
				if (element._id === postId){
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
					if (element._id === commentId){
						console.log('the comment getter', element)
						return element;
					}
				});
			}
		};
	}
}