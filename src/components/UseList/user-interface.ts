export interface State {
  status: "init" | "fetching" | "error" | "fetched";
  dataPost?: any[];
  dataUsers?: any[];
  error?: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IPost {
  userId: number;
  id: number;
  userData: IUser | undefined;
  title: string;
  body: string;
}

export type PostType = IPost;

export interface UserProp {
  userName: string;
  name: string;
}

export interface PostsProp {
  title: string;
  body: string;
}

export default IUser;
