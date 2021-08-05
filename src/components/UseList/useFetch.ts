import { useEffect, useState } from "react";

import axios, { AxiosRequestConfig } from "axios";
import IUser, { IPost, State } from "./user-interface";

const urlPosts: string = "posts??userId=1&_limit=15";
const urlUsers: string = "users";

const initialState: State = {
  status: "init",
  error: undefined,
  dataPost: undefined,
};

const addUserToDataPost = (posts: IPost[], users: IUser[]) => {
  let newArr = posts.map((p: IPost) => {
    let idx = users.findIndex((u: IUser) => u.id === p.userId);

    if (idx > -1) {
      p.userData = users[idx];
      // p.userData = { un: users[idx].username, nm: users[idx].name };
    } else {
      p.userData = undefined;
    }

    return p;
  });
  return newArr;
};

function useFetch(urlBase?: string, options?: AxiosRequestConfig): State {
  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    if (dataState.status !== "fetched") return;

    const fetchUsers = () => {
      let url = urlBase + urlUsers;
      try {
        axios.get<IUser[]>(url).then((jsonUsers) => {
          let postData = addUserToDataPost(dataState.dataPost, jsonUsers.data);
          setDataState({ ...dataState, dataPost: postData });
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataState.status]);

  function fetchData() {
    let url = urlBase + urlPosts;
    try {
      fetch(url)
        .then((data) => data.json())
        .then((jsonData) => {
          setDataState({ ...dataState, status: "fetched", dataPost: jsonData });
        });
    } catch (error) {
      setDataState({ ...dataState, error: "failure" });
    }
  }

  useEffect(() => {
    if (!urlBase) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlBase]);

  return dataState;
}

export default useFetch;
