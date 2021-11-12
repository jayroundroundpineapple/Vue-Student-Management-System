<template>
	<div class="breadcrumb">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="v in lists" :key='v.path'>
				<router-link :to='v.path'>{{v.meta.title}}</router-link>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				lists: []
			}
		},
		watch: {
			$route(to, from) {
				// this.lists=to.matched;
				this.getBreadcrumb(to.matched);
			}
		},
		methods: {
			getBreadcrumb(matched) {
				if (matched.length && matched[1].name == 'index'){
					matched=[{path:'/home',name:'home',meta:{title:'首页'}}];
				}
				this.lists=matched;
			}
		},
		mounted() {
			this.getBreadcrumb(this.$route.matched);
		}
	}
</script>
<style></style>
