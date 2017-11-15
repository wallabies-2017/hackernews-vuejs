<template>
	<div>
		<p><b>{{comment.username}}</b>: {{comment.content}}</p>
	</div>
</template>
<script>
	export default {
		name: "commentSummary",
		props: {
			comment: Object
		}
	};
</script>