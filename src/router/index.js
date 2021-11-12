import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'    //输入斜杠，重定向，直接进入首页  
  },
  {
    path: '/login',   //登录页面
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',   //首页模块
    name: 'index',
	meta:{title:'首页'},
    component: () => import('../views/Home/Index.vue'),
	// 添加子路由,数据管理和信息管理是首页下的子路由
	children:[
		{
		  path: '/index',   //数据管理模块
		  name: 'index',
		  meta:{title:'首页'},
		  component: () => import('../views/Home/index/Index.vue')
		},
		{
		  path: '/stats',   //数据管理模块
		  name: 'stats',
		  meta:{title:'学生信息'},
		  component: () => import('../views/Home/stats/Index.vue')
		},
		{
		  path: '/wms',   //信息管理模块
		  name: 'wms',
		  meta:{title:'信息管理'},
		  component: () => import('../views/Home/wms/Index.vue'),
		  children:[
			  {
			    path: '/wms/list',   //信息管理的子模块：信息列表
			    name: 'wmsList',
				meta:{title:'信息列表'},
			    component: () => import('../views/Home/wms/List.vue')
			  }
		  ]
		},
		{
		  path: '/user',   //用户管理模块
		  name: 'user',
		  meta:{title:'课程进度'},
		  component: () => import('../views/Home/user/Index.vue'),
			children:[  //用户管理子模块
				{
					path:'/user/stats',
					name:'userStats',
					meta:{title:'进度展示'},
					  component: () => import('../views/Home/user/stats.vue')
				},
				{
					path:'/user/role',
					name:'userRole',
					meta:{title:'课时统计'},
					  component: () => import('../views/Home/user/role.vue')
				}
			]
		}
	]
  }, 
]

const router = new VueRouter({
  routes
})

export default router
