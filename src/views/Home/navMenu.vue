<template>
	<el-aside width="200px">
		<el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
			<NavItem v-for='v in items' :key='v.url' :item='v' :basePath='v.url' />
		</el-menu>
	</el-aside>
</template>

<script>
	import NavItem from './NavItem.vue'
	export default {
		data() {
			return {
				items: [{name: '首页',url: '/index'},
					{name: '学生信息',url: '/stats'},
					{name: '信息管理',url: '/wms',child:[{name:'列表管理',url:'/wms/list'}]},
					{
					name: '课程进度',
					url: '/user',
					child:[
						{name:'进度展示',url:'/user/stats'},
					    {name:'课时统计',url:'/user/role'}
					]
					}
				]
			}
		},
		components:{NavItem},
		methods: {

		}
	}
</script>
