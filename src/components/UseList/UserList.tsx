import React, { useState } from 'react';

import UserElement from './UserElement'; 
import PostElement from './PostElement'; 
import useFetch from './useFetch'; 
import stylusLi, { listStylus, stylusUserAvatar } from './user-styles';
import { IPost } from './user-interface'; 
import './UserList.styles.scss'


const urlBase:string = `http://jsonplaceholder.typicode.com/`
// const url = `http://jsonplaceholder.typicode.com/posts_limit=5`
// const urlUsers = `https://jsonplaceholder.typicode.com/users`

const UserList:React.FC = () => {
  const [searchPost, setSearchPost] = useState<string>('') 
  const posts  = useFetch(urlBase)
 
  let handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => { 
    var element = e.target as HTMLInputElement;   
    setSearchPost(element.value)
  }
 
  return posts.dataPost ? (
    <div className='wrap-list'style={stylusUserAvatar} >
      <input type='text' defaultValue={searchPost} onChange={handlerInput} placeholder='search..' /> 
      <ul style={listStylus} >
        {posts.dataPost
        .filter(p => p.body.includes(searchPost))
        .map(render)}
      </ul>
    </div>
  )
  :(<div>...loading</div>)

  function render (el: IPost, i: number) {
    const username = el.userData ? el.userData.username : '', 
    name = el.userData ? el.userData.name : ''
    return (<li key={i} style={stylusLi} > 
              { el.userData && <UserElement userName={username} name={name} /> }
              <PostElement title={el.title} body={el.body} />
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
 