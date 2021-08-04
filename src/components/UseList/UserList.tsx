import React, { useState } from 'react';

import './UserList.styles.css'
import useFetch from './useFetch'; 
import stylusLi, { listStylus, stylusUserAvatar } from './user-styles';
import { Post } from './user-interface';


const urlBase:string = `http://jsonplaceholder.typicode.com/`
// const url = `http://jsonplaceholder.typicode.com/posts_limit=5`
// const urlUsers = `https://jsonplaceholder.typicode.com/users`



const User = ( {userName, name} ):JSX.Element => {
  return (<div className='user-avatar' style={stylusUserAvatar} >
            <div>{userName}</div>  
            <div>({name})</div>  
          </div>)
}
const Posts = ( {title, body} ):JSX.Element => {
  return (<div className='user-avatar' style={stylusUserAvatar} >
            <div style={{color:'grey'}}>{title}</div>
            <div>{body}</div>
          </div>)
}

const UserList = () => {
  const [searchPost, setSearchPost] = useState<string>('') 
  const posts  = useFetch(urlBase)
 

  // let handlerLi = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => { 
  //   var element = e.target as HTMLElement;   
  // }
  let handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => { 
    var element = e.target as HTMLInputElement;   
    setSearchPost(element.value)
  }
 
  return posts.data ? (
    <div className='wrap-list'style={stylusUserAvatar} >
      <input type='text' defaultValue={searchPost} onChange={handlerInput} /> 
      <ul style={listStylus} >
        {posts.data
        .filter(p => p.body.includes(searchPost))
        .map(render)}
      </ul>
    </div>
  )
  :(<div>...loading</div>)

  function render (el: Post,i: number) {
    return (<li key={i}   style={stylusLi} > 
              <User userName={el.userData && el.userData.un} name={el.userData && el.userData.nm}  /> 
              <Posts title={el.title} body={el.body}  />
            </li>)
  }



  
}

// function areEqual(prevProps: any, nextProps: any) {

//   if(prevProps === nextProps) {
//     console.log(true);
//     return true
//   }else {
//     console.log(false);
//     return false
//   }

// }
// export default React.memo(UserList, areEqual);
export default React.memo(UserList);
 