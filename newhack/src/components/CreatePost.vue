<template>
	<form 
	v-on:submit.prevent="createPost($event, subject, contet)">
		<h1>Make a Post</h1><br>
		<label>Subject</label>
		<input type="text" name="subject" v-model="title">
		<label>Composition</label>
		<textarea 
			rows="4" cols="50" 
			name="content" v-model="content">
		</textarea>
		<button type="submit">Post</button>
	</form>
</template>

<script>
	export default {
		name: 'create-post',
		data: function(){
			return {
				title:'',
				content:''
			};
		},
		computed: {
			username() {
				return this.$store.state.username;
			}
		},
		methods: {
			createPost: function(event, title, content){
				this.$store.dispatch("createPost", {
					subject: title, 
					content: content,
					username: this.username
				});
				this.$set(this, "title", "");
				this.$set(this, "content", "");
			}
		}
	}
</script>