import React, { useState } from 'react';
import Aux from '../Aux1/Hoc';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

const layout = props => {

    const [sideDramerIsVisible, SetSideDramerIsVisible] = useState(false)
    
   const SideDrawerClosedHandler = () => {
        SetSideDramerIsVisible(false);
    }

   const SideDrawerToggleHandler= () =>{
        SetSideDramerIsVisible(!sideDramerIsVisible)
    }

     return (
      <Aux>
          <Toolbar 
              isAuth={props.isAuthenticated}
              drawerToggleClicked={SideDrawerToggleHandler}/>
           <SideDrawer 
               isAuth={props.isAuthenticated}
               open={sideDramerIsVisible}
               closed={SideDrawerClosedHandler}/>
           <main className={classes.Content}>
           {props.children}
           </main>
       </Aux>
        )
    }

const mapStateToProps= state=> {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps) (layout);