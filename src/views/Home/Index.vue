<template>
	<div class="about">
		<el-container>
			<!-- 左侧导航 -->
			<NavMenu />
			<el-container>
				<!-- 右侧部分 -->
				<!-- 头部 -->
				<el-header style='height: 50px;'>
					<Breadcrumb />
					<el-button class="exit" type="primary" @click='goBack()'>退出</el-button>
				</el-header>
				<!-- 主体部分 -->
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import NavMenu from './navMenu.vue'
	import Breadcrumb from './breadcrumb.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {
			goBack() {
				this.$router.push('/login');
			}
		},
		components: {
			NavMenu,
			Breadcrumb
		}
	}
</script>
<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-button {
		padding: 10px 20px;
	}

	.el-breadcrumb {
		width: 300px;
	}

	el-icon-user .el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 56px;
		padding: 0px
	}

	.el-icon-menu:before {
		content: "\e718";
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
