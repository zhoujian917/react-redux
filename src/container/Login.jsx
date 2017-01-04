import React,{Component} from 'react';

import * as Actions from '../redux/action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { NoLoginTips } from '../component/common/index';
import SignIn from '../component/login';

class Login extends Component{
	
	constructor(props){
		super(props);
		
		this.loginFlag = this.loginFlag.bind(this);
	}
	
	loginFlag(){
		let loginDom = "";
		const token = localStorage.getItem("token");
		if( token == null || token=="" ){
			loginDom = <SignIn/>
		}else{
			loginDom = <div>亲,您已登录！</div>;
		}
		return (
			loginDom
		);
	}
	
	render(){
		return(
			<div className="login_bor">
				{this.loginFlag()}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
