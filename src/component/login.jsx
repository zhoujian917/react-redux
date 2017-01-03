import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/action';

/**
 * *
 *   sing
 *
 */
class SignIn extends Component{
	constructor(props){
		super(props);
		//this.login() = this.login().bind(this);
		this.login = () =>{
			let accessValue = this.refs.access.value;
			if (!accessValue) return alert("access token 不能为空");
			//调用action
			let data = {
				"accesstoken":accessValue
			}
			this.props.actions.login(data);
		}
	}
	
	
	render(){
		const { actions, state} = this.props;
		if(state.cnode.login){
			alert("登录成功！");
		}
		return(
			<div className="login">
				<input type="text" ref="access" placeholder="请填写ACCESS TOKEN"/>
				<span className="login_btn" onClick={this.login}>登录</span>
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
)(SignIn)