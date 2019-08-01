import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './reducer/reducer'
import App from './App';
import './index.css'
const store=createStore(Reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



