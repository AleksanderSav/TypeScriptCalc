import { ReactNode } from "react";

interface ITest {
  width: number;
  height: number;
  click?: () => void;
  children: ReactNode;
}

const Test: React.FC<ITest> = ({ width, height, click, children }) => {
  return <div onClick={click}>{children}</div>;
};

export default Test;
