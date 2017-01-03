import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';


/**
 * *
 *   Header
 *
 */
export class Header extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		const tabList = ['all', 'good', 'share', 'ask', 'job']
		return(
			<div className="header">
				<a className="top_tab active">全部</a>
				<a className="top_tab">精华</a>
				<a className="top_tab">分享</a>
				<a className="top_tab">问答</a>
				<a className="top_tab">招聘</a>
			</div>
		);
	};
}

/**
 * *
 *   Footer
 *
 */
export class Footer extends Component{
	render(){
		return(
			<div className="fixed_footer">
				<a href="#" className="aTab on">
					<i></i>
					<span>首页</span>
				</a>
				<a href="#" className="aTab">
					<i></i>
					<span>消息</span>
				</a>
				<a href="#" className="aTab">
					<i></i>
					<span>发布</span>
				</a>
				<a href="#" className="aTab">
					<i></i>
					<span>个人</span>
				</a>
			</div>
		);
	};
}

