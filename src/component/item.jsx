import React , { Component }from 'react';
import {Link} from 'react-router';

export default class Item extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<li>
				<p className="title">
					<Link to={`/topic/${this.props.item.id}`}>{this.props.item.title}</Link>
				</p>
				<div className="item_bot">
					<img src={this.props.item.author.avatar_url} className="pic"/>
					<div className="item_rt">
						<div className="item_top">
							<span className="lt">{this.props.item.author.loginname}</span>
							<span className="rt">{this.props.item.reply_count}/{this.props.item.visit_count}</span>
						</div>
						<div className="item_top">
							<span className="lt">2天前</span>
							<span className="rt">1小时前</span>
						</div>
					</div>
				</div>
			</li>
		);
	}
}
