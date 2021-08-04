import { useEffect, useState } from "react";

import axios, { AxiosRequestConfig } from "axios";
import User, { Post } from "./user-interface";

// State & hook output
interface State {
  status: "init" | "fetching" | "error" | "fetched";
  data?: any[];
  dataUsers?: any[];
  error?: string;
}

const urlPosts: string = "posts??userId=1&_limit=15";
const urlUsers: string = "users";

const initialState: State = {
  status: "init",
  error: undefined,
  data: undefined,
  dataUsers: undefined,
};

const addUserToDataPost = (posts: any[], users: any[]) => {
  let newArr = posts.map((p: Post) => {
    let idx = users.findIndex((u: User) => u.id === p.userId);
    console.log({ idx });

    if (idx > -1) {
      p.userData = { un: users[idx].username, nm: users[idx].name };
    } else {
      p.userData = undefined;
    }

    return p;
  });
  return newArr;
};

function useFetch(urlBase?: string, options?: AxiosRequestConfig): State {
  const [dataPost, setDataPost] = useState(initialState);
  console.log({ dataPost });

  useEffect(() => {
    if (dataPost.status !== "fetched") {
      return;
    }

    const fetchUsers = () => {
      let url = urlBase + urlUsers;
      try {
        fetch(url)
          .then((data) => data.json())
          .then((jsonUsers: any[]) => {
            console.log({ jsonUsers });
            let postData = addUserToDataPost(dataPost.data, jsonUsers);
            console.log({ postData });

            setDataPost({ ...dataPost, data: postData });
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();

    return () => {
      console.log("exit");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPost.status]);

  function fetchData() {
    let url = urlBase + urlPosts;
    try {
      fetch(url)
        .then((data) => data.json())
        .then((jsonData) => {
          console.log(jsonData);

          setDataPost({ ...dataPost, status: "fetched", data: jsonData });
        });
    } catch (error) {
      // dispatch({ type: "failure", payload: error.message })
    }
  }

  useEffect(() => {
    if (!urlBase) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlBase]);

  return dataPost;
}

export default useFetch;
