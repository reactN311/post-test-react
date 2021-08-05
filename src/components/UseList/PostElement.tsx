import React from 'react';

import { stylusUserAvatar } from './user-styles';
import { PostsProp } from './user-interface'; 
 
const PostElement :React.FC<PostsProp> = ({title, body}:PostsProp):JSX.Element => {
  return (<div className='post-element' style={stylusUserAvatar} >
            <div style={{color:'grey'}}>{title}</div>
            <div>{body}</div>
          </div>)
}

export default React.memo(PostElement);
 