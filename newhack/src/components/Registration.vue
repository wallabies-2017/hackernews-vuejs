<template>
	<div v-if="!session">
		<form 
		v-on:submit.prevent="register($event, subject, contet)">
		<h1>Register</h1><br>
			<label>username</label>
			<input type="text" name="username">
			<label>password</label>
			<input type="password" name="password">
			<button type="submit">Post</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'registration',
		data: function(){
			return {
				username:'',
				password:''
			};
		},
		computed: {
			session: function(){
				return this.$store.state.session;
			}
		},
		methods: {
			register: function($event, username, password){
				this.$store.dispatch("register", {
					username: username,
					password: password
				});
				this.$set(this, "username", "")
				this.$set(this, "password", "")
			}
		}
	}
</script>