import React, { useState } from 'react';

import './UserList.styles.css'
import useFetch from './useFetch'; 
import stylusLi, { listStylus } from './user-styles';


const urlBase:string = `http://jsonplaceholder.typicode.com/`
// const url = `http://jsonplaceholder.typicode.com/posts_limit=5`
// const urlUsers = `https://jsonplaceholder.typicode.com/users`



const User = ( {userName, name} ) => {
  return (<div>{userName} ({name})</div>)
}

const UserList = () => {
  const [searchPost, setSearchPost] = useState<string>('') 
  const posts  = useFetch(urlBase)
 

  // let handlerLi = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => { 
  //   var element = e.target as HTMLElement;   
  // }
 
  return posts.data ? (
    <div className='wrap-list' >
      <input type='text' defaultValue={searchPost} onChange={(e) => setSearchPost(e.target.value)} /> 
      <ul style={listStylus} >
        {posts.data
        .filter(p => p.body.includes(searchPost))
        .map((el, i) => <li key={i}   style={stylusLi} > <User userName={el.userData && el.userData.un} name={el.userData && el.userData.nm}  /> <div style={{color:'grey'}}>{el.title}</div><div>{el.body}</div></li>)}
      </ul>
    </div>
  )
  :(<div>...loading</div>)
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
 