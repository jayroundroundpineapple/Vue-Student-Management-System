<template>
	<div class="login">
		<h2 class="login-title">登录页面</h2>
		<br><br><br><br><br><br>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="姓名" prop="account">
				<el-input v-model="ruleForm.account"></el-input>
			</el-form-item>

			<el-form-item label="密码" prop="password">
				<el-input type='password' v-model="ruleForm.password"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import axios from '@/api'
	export default {
		name: 'Login',
		data() {
			return { //返回一个对象
			  ruleForm:{
				  account:'jay',
				  password:''
			  },
				rules: {   //添加校验
					account: [
						{required: true,message: '请输入姓名',trigger: 'blur'},
						{min: 3,max: 18,message: '长度在 3 到 18个字符',trigger: 'blur'}
			           ],
					   password: [
					   	{required: true,message: '请输入密码',trigger: 'blur'},
					   	{min: 3,max: 18,message: '长度在 3 到 18 个字符',trigger: 'blur'}
					    ]
					}
				}
			},
			methods: {
				submitForm(formName){
					let {account,password}=this.ruleForm;
					  this.$refs[formName].validate((valid) => {
					          if (valid){
								axios({
									method:'post',
									url:'/get_login',
									data:{
										user:account,
										password:password}// 成功的话res是后端的返回值	
									}).then(res=>{
										console.log(res);
										let {code,msg}=res.data;
										if(code==200){
											this.$router.push('/home');
										}else{
											alert(msg);
										}
									}).catch(err=>{
										console.log(err)
									})
					          } else {
					            console.log('error submit!!');
					            return false;
					          }
					        });
						this.$router.push('/index');  //如果admin登录跳转首页 
					}
				}
			}
</script>
