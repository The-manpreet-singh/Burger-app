import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux1/Hoc';
import useHttpErrorHnadler from '../../hooks/http-error-handler';

const withErrorHandler =(WrappedComponent, axios) => {
            return props => {
                 
                const [error, clearError] = useHttpErrorHnadler(axios);

                    return (
                        <Aux>
                         <Modal 
                           show={error}
                             modalClosed={clearError}>
                           {error ? error.message :null}
                         </Modal>
                         <WrappedComponent {...props} />
                         </Aux>
                    );
                };
            };

export default withErrorHandler;