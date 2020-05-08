import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Logout from '../src/containers/Auth/Logout/Logout';

import {connect} from 'react-redux';
import * as actions from '../src/store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(()=> {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(()=> {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(()=> {
  return import('../src/containers/Auth/Auth');
});
class App extends Component {
  /* state= {
    show : true
  };
 componentDidMount() {
    setTimeout(()=>{
       this.setState({show : false});
    }, 5000);
 } */
componentDidMount () {
  this.props.onTryAutoSignUp();
}

  render() {
    let routes = (
      <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/auth" component={asyncAuth} />
      <Redirect to='/' />
      </Switch>
    );
if(this.props.isAuthenticated) {
  routes= (
    <Switch>
      <Route path="/" exact component={BurgerBuilder} />
           <Route path="/checkout" component={asyncCheckout} />
           <Route path="/orders" component={asyncOrders} />
           <Route path="/logout" component={Logout} />
           <Route path="/auth" component={asyncAuth} />
           <Redirect to='/' />
    </Switch>
  );
}

    return (
      <div>
       <Layout>
       {routes}
       </Layout>
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    isAuthenticated : state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (App));
