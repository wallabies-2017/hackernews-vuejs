<template>
	<form v-on:submit.prevent="editPost($event, title, content)">
		<label>Title</label>
		<input type="text" name="title" v-model="title">
		<label>Content</label>
		<textarea 
			rows="4" cols="50" 
			name="content" v-model="content">
		</textarea>
		<button type="submit">Post</button>
	</form>
</template>

<script>
	export default {
		name: "editPost",
		props: {
			post: Object
		},
		data: function(){
			return  {
				title: this.post.title,
				content: this.post.content
			};
		},
		methods: {
			editPost: function(event, title, content){
				this.$store.dispatch("editPost", {
					post: this.post,
					data: {
						title: title,
						content: content
					}
				});
			}
		}
	};
</script>