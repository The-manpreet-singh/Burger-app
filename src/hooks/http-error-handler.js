import { useState, useEffect} from 'react';

export default httpClient => {
    const [error, setError] = useState(null)
                
              
    const reqInterceptor = httpClient.interceptors.request.use(req => {
            setError(null);
            return req;
    });
    const resInterceptor =httpClient.interceptors.response.use(res => res, err => {
                setError(err);
        });

  useEffect(()=>{
       // console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
      return () => {
       httpClient.interceptors.request.eject(reqInterceptor);
        httpClient.interceptors.response.eject(resInterceptor);
      };
     }, [reqInterceptor, resInterceptor] );

   const errorConfiremedHandler = () => {
       setError(null);
    };

    return [error, errorConfiremedHandler];
}