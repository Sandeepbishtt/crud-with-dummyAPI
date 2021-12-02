import React from 'react';

interface Props {
    component: React.ComponentType
    path?: string
  }

const PrivateRoute :React.FC<Props> = ({component:RouteComponent}) => {
    return  <RouteComponent/>
        
}
   
export default PrivateRoute
