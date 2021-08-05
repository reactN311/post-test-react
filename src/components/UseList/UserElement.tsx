import React from 'react';

import './user.styles.scss';
import { stylusUserAvatar } from './user-styles';
import { UserProp } from './user-interface'; 


const UserElement :React.FC<UserProp> = ({userName, name}:UserProp):JSX.Element => {
  return (<div className='user-avatar' style={stylusUserAvatar} >
            <div>{userName}</div>  
            <div style={{fontSize: 'x-small',textAlign: 'center'}} >({name})</div>  
          </div>)
}
 
export default React.memo(UserElement);
 