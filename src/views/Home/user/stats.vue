<template>
	<div>
		<el-progress :text-inside="true" :stroke-width="22" :percentage="num" status="success"></el-progress>
		<el-steps :active="active" finish-status="warning">
		  <el-step  v-for="v in steps" :key='v' :title="v"></el-step>
		</el-steps>
		<el-button v-show="flag" style="margin-top: 12px;" @click="next">下一步</el-button>
	</div>
</template>
<script>
  export default {
    data() {
      return {
		  active: 0,   //步骤条初始化的值
		  flag:true,
		  steps:["校运会","期中考试","心理测评","项目实习","期末考试"]
      };
    },
    methods: {
      next() {
        if (this.active++ >= this.steps.length){
			this.$confirm('任务完成！').then(res=>{
				//任务完成后把弹框隐藏起来
				this.flag=false;
			})
		} 
      }
    },	
	computed:{
		num(){
			return this.active/this.steps.length*100;
		}
	}
  }
</script>