import React, { useState } from "react";

const ContadorProducts = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      {" "}
      <button
        className="bg-red-500 minus p-2 rounded"
        disabled={count <= 1}
        onClick={decrease}
      >
        -
      </button>
      <span className="p-0 m-0">{count}</span>
      <button
        className="bg-blue-500 plus p-2 rounded ml-2"
        disabled={count >= stock}
        onClick={increase}
      >
        +
      </button>
    </>
  );
};

export default ContadorProducts;
