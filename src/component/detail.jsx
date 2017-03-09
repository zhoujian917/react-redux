import React ,{Component} from 'react';

import * as Actions from '../redux/action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import marked from 'marked';

class Detail extends Component{
	
	constructor(props){
		super(props);
	}
	componentWillMount(){
		window.scroll(0,0);
		let { params,actions,state } = this.props;
		actions.getTopic(params.id);
	}
	render(){
		let { state } = this.props;
		let topic = state.cnode.topic==null ? "" : state.cnode.topic;
		const content = topic.content;
		return(
			<div className="detail_bor">
				<div className="title">{topic.title}</div>
				<div className="content" dangerouslySetInnerHTML={{__html:content}}></div>
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
)(Detail)