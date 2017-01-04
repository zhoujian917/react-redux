import React from 'react';
import { render } from 'react-dom'; 
import { connect, Provider } from 'react-redux';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import * as actionCreators from './redux/action';
import store from './redux/store/index';

import './config/config.js';//引入默认配置

import Index from './container/Index';
import route from './router/index';

import './style/reset.scss';
import './style/index.scss';

 
 
store.subscribe(()=>{
	console.log(store.getState());
});

const dom = document.getElementById('body');

render(<Provider store={store}>
    		{route}
     </Provider>,dom);
