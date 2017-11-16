<template>
	<div>
		<comment-summary
			v-if="!mode.edit"
			:post="post"
			:comment="comment"
		>
		</comment-summary>
		<edit-comment
			v-if="mode.edit"
			:post="post"
			:comment="comment"
		>
		</edit-comment>
		<button
			:key="post._id"
			@click="mode.edit = !mode.edit"
		>
			{{editMode}}
		</button>
	</div>
</template>

<script>
	export default {
		name: 'comment-item',
		props: {
			post: Object,
			comment: Object
		},
		data: function(){
			return {
				mode: {
					detail: false,
					edit: false
				}
			}
		},
		computed: {
			editMode: function(){
				return this.mode.edit ? "Summary":"Edit";
			}
		}
	};
</script>