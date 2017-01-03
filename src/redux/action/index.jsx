import ajax from '../../config/ajax.js';

//获取全部列表
let defaultQuery = {
  page: 1,
  limit: 20,
  tab: 'all'
}
export const fetchIndexData = (query = defaultQuery) => dispatch =>{
	const url = "https://cnodejs.org/api/v1/topics";
	ajax({
	    method: 'GET',
	    url: url,
	    data:query,
	    success: function (res) {
	    		let respone = JSON.parse(res);
	    		 if(respone.success == true){
	    		 	console.log(respone.data);
	    		 	dispatch({
	       			type:'GET_LIST',
	       			list:respone.data
	       		});
	    		 }
	    }
	    
	});
	
}
//登录
export const login = (data) => dispatch =>{
	const url = "https://cnodejs.org/api/v1/accesstoken";
	ajax({
	    method: 'post',
	    url: url,
	    data:data,
	    success: function (res) {
	       console.log(res);
	       let respone =  JSON.parse(res);
	        console.log(respone);
	       if(respone.success == true){
	       		localStorage.setItem("token",data.accesstoken);//本地存储token
	       		localStorage.setItem("username",respone.loginname);//本地存储用户名
	       		
	       		dispatch({
	       			type:'LOGIN',
	       			login:true
	       		});
	       		
	       }else{
	       		alert("登录失败了！");
	       		dispatch({
	       			type:'LOGIN_ERROR',
	       			errorInfo:"登录失败喽！"
	       		});
	       }
	    }
	});
}
//登出
export const logout = () => dispatch =>{
	localStorage.removeItem("token");
	localStorage.removeItem("username");
	dispatch({
		type:'LOGOUT',
		login:false
	});
}
