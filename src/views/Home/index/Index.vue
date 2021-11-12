<template>
	<div id="myclass">
		<h2>校园风景</h2>
		<!-- 走马灯 -->
		<el-carousel indicator-position="outside" type="card" :interval="3000">
			<el-carousel-item v-for="item in imgLists" :key="item">
				<img :src="item" />
			</el-carousel-item>
		</el-carousel>
		<!-- 卡片 -->
		<el-row :gutter="20">
			<el-col :xs='24' :sm='12' :md='6' :span="6" v-for="o in cardLists" :key="o">
				<el-card :body-style="{ padding: '0px' }">
					<img :src="o.img" class="image" width="280px" height="200px">
				</el-card>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgLists: [
					require("@/assets/img/004.png"),
					require("@/assets/img/008.png"),
					require("@/assets/img/007.png")
				],
				cardLists:[
					{title:'企业荣誉',img:require("@/assets/img/01.png")},
					{title:'成长之路',img:require("@/assets/img/03.png")},
					{title:'企业荣誉',img:require("@/assets/img/05.png")},
					{title:'企业荣誉',img:require("@/assets/img/01.png")}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">

</style>

