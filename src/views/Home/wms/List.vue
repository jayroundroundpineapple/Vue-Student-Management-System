<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>列表展示</span>
				<el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true">添加数据</el-button>
			</div>
			<el-collapse v-model="activeNames">
				<el-collapse-item v-for="v in items" :key='v.id' :title="v.title" :name="v.id">
					<div v-for="(c,i) in v.content" :key='i'>{{c}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-card>
		<!-- 弹出框 -->
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>是否确定添加数据？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="submit()">确 定</el-button>   <!-- submit点击之后数据提交 -->
			</span>
		</el-dialog>
	</div>
</template>
<script>
	import axios from '@/api'
	var _id;
	export default {
		data() {
			return {
				dialogVisible:false,   //弹框默认值
				activeNames: '1', // 表示默认展开
				items: [{
						id: 1,
						title: '王小虎',
						content: [
							'阅读,游泳,篮球,演讲,辩论性格开朗、待人热情、工作细心、办事高效、能吃苦耐劳；',
							'喜好书法并有一定的书写能力'
						]
					},
					{
						id: 2,
						title: '陈一飞',
						content: [
							'电脑应用熟练,熟练操作Word,Excel,,Outlook, ERP等各种办公软件',
							'有较好的文字写作功底,口头表达能力较强'
						]
					},
					{
						id: 3,
						title: '钱二胡',
						content: [
							'勤奋上进好学,工作细心,条理清晰,踏实肯干,有很强的责任心',
							'性格开朗乐观,善于人际交流和沟通,具备团队合作精神;'
						]
					},
				]
			}
		},
		methods:{
			// 发送get请求
			getItems(){
				axios.get('').then(res=>{
					console.log(res);// 请求成功的数据
				}).catch(err=>{
					console.log(err);// 请求失败的数据
				})
			},
			submit(){
				this.dialogVisible = false,   // 点击之后先把弹框隐藏
				_id = Math.max(...this.items.map(v=>v.id))+1;
				this.items.push({
					id: _id,
					title: '新添加的数据',
					content: [
						'这是新添加的数据',
					]
				})
			}
		},
		mounted() {
			this.activeNames = this.items[0].id;
			this.getItems();
		}
	}
</script>
