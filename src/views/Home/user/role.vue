<template>
	<div>
		<div style="width:800px;height:500px" ref="chart"></div>
	</div>
</template>
<script>
	//局部引入echarts
	const echarts = require('echarts');
	export default {
		data() {
			return {

			}
		},
		methods: {
			initCharts() {
				let myChart = echarts.init(this.$refs.chart);
				// 绘制图表
				myChart.setOption({
					title: {
						text: '科目课时统计'
					},
					tooltip: {},
					xAxis: {
						data: ["心理健康", "高等数学", "数据结构", "体育", "科学导论", "java"]
					},
					yAxis: {},
					series: [{
						name: '课时',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 30]
					}]
				});
			}
		},
		mounted(){
			this.initCharts();
		}
	}
</script>
