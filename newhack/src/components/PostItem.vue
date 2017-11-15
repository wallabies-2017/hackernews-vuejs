<template>
	<div>
		<transition-group name="component-fade" mode="in-out">
			<post-summary
				v-if="!mode.edit"
				:post="post"
				:key="post.createdAt"
				>
			</post-summary>
		</transition-group>

		<button
			:key="post.createdAt"
			@click="mode.edit = !mode.edit"
		>
			{{editMode}}
		</button>
		<button
			:key="post.createdAt"
			@click="mode.detail = !mode.edit"
		>
			{{detailMode}}
		</button>

		<transition-group name="component-fade" mode="in-out">
			<add-comment
				v-if="mode.detail"
				:post="post"
				:key="post.createdAt"
			>
			</add-comment>
			<ul
				v-if="mode.detail"
				:key="post.createdAt"
			>
				<li
					is="comment-item"
					v-for="comment in post.comments"
					:post="post"
					:comment="comment"
					:key="comment.updatedAt"
				>
				</li>
			</ul>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: 'post-item',
		props: {
			post: Object
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
			},
			detailMode: function(){
				return this.mode.detail ? "Hide":"Detail";
			}
		}
	}
</script>