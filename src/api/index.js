import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.94.192:8080/';
// 请求拦截，发送请求前要干什么
axios.interceptors.request.use(config=>{
	return config;
})
// 响应拦截器
axios.interceptors.response.use(res=>{
	return res
},err=>{
	return Promise.reject(err)
})
// 导出axios
export default axios;