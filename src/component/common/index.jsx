import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link ,IndexLink} from 'react-router';
import { connect } from 'react-redux';


/**
 * *
 *   Header
 *
 */
export class Header extends Component{
	constructor(props){
		super(props);
		console.log(this.props);
	}
	
	render(){
		const tabList = ['all', 'good', 'share', 'ask', 'job']
		return(
			<div className="header">
				<Link to="/" className="top_tab" activeClassName="active">全部</Link>
				<Link to="/?tab=good" className="top_tab" activeClassName="active">精华</Link>
				<Link to="/?tab=share" className="top_tab" activeClassName="active">分享</Link>
				<Link to="/?tab=ask" className="top_tab" activeClassName="active">问答</Link>
				<Link to="/?tab=job" className="top_tab" activeClassName="active">招聘</Link>
			</div>
		);
	};
	shouldComponentUpdate(nextProps){
		 return this.props.tab !== nextProps.tab;
	}
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
				<IndexLink to="/" className="aTab" activeClassName="on">
					<i></i>
					<span>首页</span>
				</IndexLink>
				<Link to="/message" className="aTab" activeClassName="on">
					<i></i>
					<span>消息</span>
				</Link>
				<Link to="/push" className="aTab" activeClassName="on">
					<i></i>
					<span>发布</span>
				</Link>
				<Link to="/login" className="aTab" activeClassName="on">
					<i></i>
					<span>个人</span>
				</Link>
			</div>
		);
	};
}
/**
 * *
 *   NoLoginTips
 *
 */
export class NoLoginTips extends Component{
	render(){
		return(
			<div className="no_login">
				亲,您还没有登录哦!点此<a href="#">登录</a>
			</div>
		);
	}
}
