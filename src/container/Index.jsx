import React from 'react';
import { render } from 'react-dom';

import Search from '../component/common/Search';
import { Header, Footer } from '../component/common/index';
import List from '../component/list';

import * as Actions from '../redux/action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Index extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
	}
	componentWillMount(){
		this.props.actions.fetchIndexData();
	}
	
	render(){
		
		let {actions,state} = this.props;
		const list = state.cnode.list;

		return(
			<div className="page">
				<Header/>
				<List list={list} actions={actions}/>
				<Footer/>
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
)(Index)