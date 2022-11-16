import React, { ReactNode } from "react";
import { IUsers } from "../../App";

interface IUsersComp {
  children: ReactNode;
  users: IUsers[];
  getUsers: () => void;
}

const Users: React.FC<IUsersComp> = ({ children, getUsers, users }) => {
  return (
    <div onClick={getUsers}>
      {children}
      {users.map((u) => u.address.city)}
    </div>
  );
};

export default Users;
