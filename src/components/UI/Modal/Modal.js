import React from 'react'; 
import classes from './Modal.css';
import Aux from '../../../hoc/Aux1/Hoc';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {

    // shouldComponentUpdate ( nextProps, nextState ){
    //     return nextProps.show !== props.show || nextProps.children !== props.children;
    // }

    // componentWillUpdate (){
    //     //console.log('[Modal] WillUpdate');
    // }
  
        return (
            <Aux>
            <Backdrop show={props.show} 
            clicked={props.modalClosed}/>
        <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' :'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
        </Aux>
        );
    }

export default React.memo(modal,
                          (prevProps, nextProps)=>
                          nextProps.show === prevProps.show &&
                           nextProps.children === prevProps.children
                           );