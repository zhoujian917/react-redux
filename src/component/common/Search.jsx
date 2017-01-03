import React ,{ Component } from 'react';

export default class Search extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div className="serach_bar">
				<i></i>
				<input className="search_input" type="text" placeholder="搜索药品/品牌等"/>
				<i className="search_q"></i>
				<a className="top_login" href="#">登录</a>
			</div>
		);
	}
	
}
