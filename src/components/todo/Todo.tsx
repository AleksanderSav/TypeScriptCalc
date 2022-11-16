import { ReactNode } from "react";
import { IResToDo } from "../../App";

interface ITodoComp {
  children: ReactNode;
  todo?: IResToDo[];
  getTod?: () => any;
}

const Todo: React.FC<ITodoComp> = ({ todo, children, getTod }) => {
  return (
    <div>
      {children}
      {todo.map((el) => (
        <div key={el.id}>
          {el.id} {el.title}
        </div>
      ))}
    </div>
  );
};

export default Todo;
