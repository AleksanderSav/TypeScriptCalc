import Inpunts from "./components/Inputs/Inputs";
import Test from "./components/test/Test";
import Todo from "./components/todo/Todo";
import axios from "axios";
import "./styles.css";
import { useState } from "react";
import Users from "./components/users/Users";

export interface IResToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
///////////////////////////
export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
export interface IGeo {
  lat: string;
  lng: string;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
///////////////////////
export default function App() {
  const [todo, setTodo] = useState<IResToDo[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);

  async function getTodo() {
    try {
      const res = await axios.get<IResToDo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10)"
      );
      setTodo(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function getUsers() {
    try {
      const res = await axios.get<IUsers[]>(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      setUsers(res.data);
      console.log(users);
    } catch (e) {
      console.log(e);
    }
  }

  interface Ifn {
    (a: number, b: number): number;
  }

  let res: number = null;

  const result: Ifn = function intFn(a, b) {
    return (res = a + b);
  };

  console.log(res);
  result(8, 5);

  return (
    <div>
      <Inpunts />
      <Todo todo={todo}>
        <button onClick={getTodo}>get todo</button>
      </Todo>
      <Users users={users} getUsers={getUsers}>
        <button>get users</button>
      </Users>
      <button>click</button>
    </div>
  );
}
