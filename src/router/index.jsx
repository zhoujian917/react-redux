import React ,{ Component }from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//container
import Index from '../container/Index';
import Login from '../container/Login';
import Message from '../container/Message';
import Push from '../container/Push';
import {Footer} from '../component/common/index';
import Detail from '../component/detail';


class Main extends Component {
    render() {
        return (
            <div>
            		{this.props.children}
            		<Footer/>
            	</div>
            
        );
    }
};
const route = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Index} />
			<Route path="/topic/:id" component={Detail} />
			<Route path="/login" component={Login} />
			<Route path="/message" component={Message} />
			<Route path="/push" component={Push} />
		</Route>
	</Router>
);

export default route;



