import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';

const store= createStore( burgerBuilderReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
  <Provider store={store} >
      <BrowserRouter>
       <App/>
      </BrowserRouter>
  </Provider>
   
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
