<template>
	<div>
		<!-- 无子级的 -->
		<el-menu-item :index="basePath" v-if="!item.child">
			<i class="el-icon-menu"></i>
			<span slot="title">{{item.name}}</span>
		</el-menu-item>

		<!-- 有子级的 -->
		<el-submenu :index="basePath" v-else>
			<template slot="title">
				<i class="el-icon-menu"></i> {{item.name}}
			</template> 
			<NavItem v-for="sub in item.child" :key='sub.url' :item='sub' :basePath='sub.url' />
		</el-submenu>
	</div>
</template>

<script>
	export default {
		name:'NavItem',
		data() {
			return {

			}
		},
		props:['item','basePath'], //父传子的数据
		methods: {

		}
	}
</script>
