<template>

	<h1>Make a Post</h1><br>
	<form 
	v-on:submit.prevent="createPost($event, subject, contet)">
		<label>Subject</label>
		<input type="text" name="subject">
		<label>Content</label>
		<textarea 
			rows="4" cols="50" 
			name="content">
		</textarea>
		<button type="submit">Post</button>
	</div>

</template>

<script>
	export default {
		name: 'create-post',
		computed: {
			username() {
				return this.$store.state.username;
			}
		}
		methods: {
			createPost: function($event, subject, content){
				var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
				this.$store.state.posts.push({
					_id: String[unixtimestamp `+(new Date())`],
					subject: subject, 
					content: content,
					createdAt: Date[ or unixtimestamp `+(new Date())`],
					updatedAt: Date[ or unixtimestamp `+(new Date())`],
					username: this.username
					upVote: 0,
					downVote: 0
				})
			}
		}
	}
</script>