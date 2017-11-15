<template>
	<div>
		<h2>{{post.title}} <small>by {{post.username}}</small></h2>
		<p>{{post.content}}</p>
	</div>
</template>

<script>
	export default {
		name: "postSummary",
		props: {
			post: Object
		}
	};
</script>