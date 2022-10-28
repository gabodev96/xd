import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ImExit } from "react-icons/im";

const ContadorProducts = ({ initial, stock, onAdd, setterOn }) => {
  const [count, setCount] = useState(initial);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="text-black">
        <div className="-mt-5  ">
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
        </div>

        <div className="flex  mt-40 lg:mt-16  ml-24  justify-end">
          <button
            className="bg-green-500 hover:bg-green-400 active:bg-green-800 p-3 rounded group"
            onClick={() => onAdd(count)}
          >
            <FaCartPlus />
            <span className="absolute w-auto p-2   z-50  rounded-md shadow-md text-white bg-green-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
              Comprar
            </span>
          </button>

          <button
            className="bg-red-500 hover:bg-red-400 p-3 rounded group  ml-2  lg:mt-0"
            onClick={setterOn}
          >
            <ImExit />
            <span className="absolute w-auto p-2   z-50  rounded-md shadow-md text-white bg-red-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
              Salir
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContadorProducts;
