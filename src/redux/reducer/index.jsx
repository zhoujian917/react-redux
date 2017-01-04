let initialState = {
	login:false,
	errorInfo:'',
	userinfo:[],
	list:[],
	tab:'all',
	page:'1',
	topic:{}
}

export const cnode = (state=initialState,action) =>{
	switch(action.type){
		case "LOGIN":
			return Object.assign({},state,{login:action.login});
		case "LOGOUT":
			return Object.assign({},state,{login:action.login});
		case "LOGIN_ERROR":
			return Object.assign({},state,{errorInfo:action.errorInfo});
		case "GET_LIST":
			return Object.assign({},state,{list:action.list});
		case "TOPIC_DETAIL":
			return Object.assign({},state,{topic:action.topic});
		default:
			return state;
	}
}
export const user = (state={},action)=>{
	
	switch(action.type){
		case "SIGN_IN":
			return true;
		default:
			return state;
	}
	
}