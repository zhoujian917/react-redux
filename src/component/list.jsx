import React , { Component }from 'react';
import Item from './item';

export default class List extends Component{
	constructor(props){
		super(props);
	}
	
	itemList(){
		return(
			(this.props.list).map(item => <Item key={item.id} item={item}/>)
		)
	}
	
	
	render(){
		
		const list = this.props.list;
		console.log(list);
		
		return(
			<div className="list">
				<ul>
					{ this.itemList() }
				</ul>
			</div>
		);
	}
}