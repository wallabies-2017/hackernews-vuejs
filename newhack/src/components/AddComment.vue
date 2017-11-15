<template>
	<form v-on:submit.prevent="addComment($event, content)">
		<input type="text" name="content" v-model="content">
		<button type="submit">Comment</button>
	</form>
</template>

<script>
	export default {
		name: 'add-comment',
		props: {
			post: Object
		},
		data: function(){
			return {
				content: ''
			};
		},
		computed: {
			username() {
				return this.$store.state.username;
			}
		},
		methods: {
			addComment: function(event, content){
				console.log(content, 'ya?');
				this.$store.dispatch("addComment", {
					post: this.post,
					data: {
						content: content,
						username: this.username
					}
				});
				this.$set(this, "content", "")
			}
		}
	};
</script>