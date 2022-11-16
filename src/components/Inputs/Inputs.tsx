import { useContext, useState } from "react";
import { calc, getOrderFN } from "../logic/logic";
import { Context } from "../../index";

function Inpunts() {
  const [obj, setObj] = useState({ width: null, height: null, count: null });
  const { user } = useContext(Context);

  function startCalc(): void {
    console.log(obj.count);
    const res: {} = calc(obj.width, obj.height, obj.count);
    console.log(res);
  }

  interface IinterFN {
    (width: number, height: number, count: number): void;
  }

  const newFN = () => {
    const order = getOrderFN(obj.width, obj.height, obj.count);
    console.log(order);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="width"
        value={obj.width}
        onChange={(e) => setObj({ ...obj, width: e.target.value })}
      />
      <input
        type="number"
        placeholder="height"
        value={obj.height}
        onChange={(e) => setObj({ ...obj, height: e.target.value })}
      />
      <input
        type="number"
        placeholder="count"
        value={obj.count}
        onChange={(e) => setObj({ ...obj, count: e.target.value })}
      />

      <button onClick={startCalc}>Get calc</button>
      <button onClick={newFN}>Get calc2</button>
    </div>
  );
}

export default Inpunts;
