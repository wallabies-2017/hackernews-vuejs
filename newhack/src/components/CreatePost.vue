<template>
	<form 
	v-on:submit.prevent="createPost($event, title, content)">
		<div v-if="session">
			<h1>Make a Post</h1><br>
			<label>Title</label>
			<input type="text" name="title" v-model="title">
			<label>Content</label>
			<textarea 
				rows="4" cols="50" 
				name="content" v-model="content">
			</textarea>
			<button type="submit">Post</button>
		</div>
	</form>
</template>

<script>
	export default {
		name: 'createPost',
		data: function(){
			return {
				title:'',
				content:''
			};
		},
		computed: {
			username() {
				return this.$store.state.username;
			},
			session: function(){
				return this.$store.state.session;
			}
		},
		methods: {
			createPost: function(event, title, content){
				this.$store.dispatch("createPost", {
					title: title, 
					content: content,
					username: this.username
				});
				this.$set(this, "title", "");
				this.$set(this, "content", "");
			}
		}
	}
</script>