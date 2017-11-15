<template>
	<form v-on:submit.prevent="editComment($event, content)">
		<input type="text" name="content" v-model="conent">
		<button type="submit">Submit</button>
	</form>
</template>

<script>
	export default {
		name: "editComment",
		props: {
			post: Object,
			comment: Object
		},
		data: function(){
			return  {
				content: this.comment.content
			};
		},
		methods: {
			editPost: function(event, content){
				this.$store.dispatch("editPost", {
					post: this.post,
					comment: this.comment,
					data: {
						content: content
					}
				});
			}
		}
	};
</script>