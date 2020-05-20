import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux1/Hoc';

const withErrorHandler =(WrappedComponent, axios) => {
            return props => {

                const [error, setError] = useState(null)
                
              
                const reqInterceptor = axios.interceptors.request.use(req => {
                        setError(null);
                        return req;
                });
                const resInterceptor =axios.interceptors.response.use(res => res, err => {
                            setError(err);
                    });

              useEffect(()=>{
                   // console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
                  return () => {
                   axios.interceptors.request.eject(reqInterceptor);
                    axios.interceptors.response.eject(resInterceptor);
                  };
                 }, [reqInterceptor, resInterceptor] );

               const errorConfiremedHandler = () => {
                   setError(null);
                };

                    return (
                        <Aux>
                         <Modal 
                           show={error}
                             modalClosed={errorConfiremedHandler}>
                           {error ? error.message :null}
                         </Modal>
                         <WrappedComponent {...props} />
                         </Aux>
                    );
                };
            };

export default withErrorHandler;