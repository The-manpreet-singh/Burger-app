import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Logout from '../src/containers/Auth/Logout/Logout';

import {connect} from 'react-redux';
import * as actions from '../src/store/actions/index';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

const Checkout = React.lazy(()=> {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(()=> {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy(()=> {
  return import('../src/containers/Auth/Auth');
});


const app = (props) => {
 
  useEffect( ()=> {
      props.onTryAutoSignUp();
  }, [] );

    let routes = (
      <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/auth" render={ ()=><Auth/>} />
      <Redirect to='/' />
      </Switch>
    );
if(props.isAuthenticated) {
  routes= (
    <Switch>
      <Route path="/" exact component={BurgerBuilder} />
           <Route path="/checkout"render={ ()=><Checkout/>} />
           <Route path="/orders" render={ ()=><Orders/>} />
           <Route path="/logout" component={Logout} />
           <Route path="/auth" render={ ()=><Auth/>} />
           <Redirect to='/' />
    </Switch>
  );
}

    return (
      <div>
       <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense> 
       </Layout>
      </div>
    );
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


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (app));
