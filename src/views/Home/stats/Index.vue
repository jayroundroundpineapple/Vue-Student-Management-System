<template>
	<el-table :data="tableData" stripe style="width: 100%">
		<el-table-column sortable prop="date" label="出生日期" width="180">
		</el-table-column>
		<el-table-column prop="name" label="姓名" width="180">
		</el-table-column>
		<el-table-column prop="address" label="地址">
		</el-table-column>
		 <el-table-column
		      prop="tag"
		      label="标签"
		      width="100"
		      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
		      :filter-method="filterTag"
		      filter-placement="bottom-end">
		      <template slot-scope="scope">
		        <el-tag
		          :type="scope.row.tag === '家' ? 'primary' : 'success'"
		          disable-transitions>{{scope.row.tag}}</el-tag>
		      </template>
		    </el-table-column>
	</el-table>
</template>

<script>
	import axios from '@/api'
	export default {
		data() {
			return {
				tableData: [{
            date: '2001-05-02',
            name: '王小虎',
            address: '东莞市普陀区金沙江路 1518',
			tag: '家'
          }, {
            date: '2000-12-24',
            name: '陈一飞',
            address: '东莞市普陀区金沙江路 1517',
			tag: '家'
          }, {
            date: '2001-08-21',
            name: '钱二胡',
            address: '东莞市普陀区金沙江路 1519',
			tag: '公司'
          }, {
            date: '2000-02-03',
            name: '胡大',
            address: '东莞市普陀区金沙江路 1516',
			tag: '家'
          }
					
				],
				
			}
		},
		methods: {
			getTable(){
				axios.get(`/tablist`).then(res=>{
					console.log(res);
					let {code,result}=res.data;
					if(code==200){
						this.tableData=result;
					};	
				},err=>{
					console.log(err)
				})
			},
			  filterTag(value, row) {
			        return row.tag === value;
			      }
		},
		mounted() {
			this.getTable();
		}
	}
</script>
