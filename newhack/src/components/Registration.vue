<template>
	
		<form 
		v-on:submit.prevent="registrationEvent($event, username, password)">
			<div v-if="!session">
				<h1>Register</h1><br>
				<label>username</label>
				<input type="text" name="username" v-model="username">
				<label>password</label>
				<input type="password" name="password" v-model="password">
				<button type="submit">Register</button>
			</div>
		</form>
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
			registrationEvent: function($event, username, password){
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