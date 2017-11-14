<template>

	<h1>Register</h1><br>
	<form 
	v-on:submit.prevent="register($event, subject, contet)">
		<label>username</label>
		<input type="text" name="username">
		<label>password</label>
		<input type="password" name="password">
		<button type="submit">Post</button>
	</div>

</template>

<script>
	export default {
		name: 'create-post',
		methods: {
			register: function($event, username, password){
				var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
				this.$store.state.username = username;
			}
		}
	}
</script>