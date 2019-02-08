import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={
        (props) => {
          const isLoggedIn = 1;

          if (!isLoggedIn) {
            return <Redirect to={
              {
                pathname: '/unauthorized',
                state: {
                  from: props.location
                }
              }
            }/>
          }
          else {
            return <Component {...props}/>
          }
        }
    }/>
  )
}

export default ProtectedRoute;
