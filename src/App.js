import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  /* state= {
    show : true
  };
 componentDidMount() {
    setTimeout(()=>{
       this.setState({show : false});
    }, 5000);
 } */
  render() {
    return (
      <div>
       <Layout>
         {/* {this.state.show ? <BurgerBuilder /> : null} this is for testing*/}
         <Switch>
           <Route path="/" exact component={BurgerBuilder} />
           <Route path="/checkout" component={Checkout} />
         </Switch>
         
         {/* <BurgerBuilder />
         <Checkout /> */}
       </Layout>
      </div>
    );
  }
}

export default App;
