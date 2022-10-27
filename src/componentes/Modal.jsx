import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { misObjetos } from "../Data/Datos";

export const Modal = ({ initial, stock, onAdd, setterOn, setterContent }) => {
  const [count, setCount] = useState(1);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      {" "}
      <div
        className=" pop_up_container shadow-2xl"
        //Background de popup, llama a encendido modal y lo convierte a false haciendo que se oculte el modal
        onClick={setterOn}
      >
        <div
          className="pop_up_body rounded h-96 w-96 lg:h-72 bg-white lg:bg-blue-500"
          onClick={(e) => {
            // El modal no cierra si su contenido es clickeado
            e.stopPropagation();
          }}
        >
          <div className="pop_up_content">
            {setterContent.map((popArray) => {
              return (
                <div
                  className="flex pt-6 pop_up_card text-center"
                  key={popArray.key}
                >
                  <img
                    src={popArray.img}
                    className="w-45 h-40 ml-2 shadow-2xl border-[1px] border-gray-400 "
                  />
                  <div className="pl-2 text-left">
                    <p className="font-baloo text-md">
                      {" "}
                      <span className="font-extrabold">Tipo: </span>
                      {popArray.tipo}
                    </p>
                    <p className="font-baloo  text-md">
                      <span className="font-extrabold">Contenido:</span>{" "}
                      {popArray.contenido}
                    </p>
                    <p className="font-baloo  text-md">
                      <span className="font-extrabold"> Precio: </span>
                      {popArray.precio}
                    </p>
                    <div className="counter text-black">
                      {/* 
                      <button
                        className="bg-red-500 p-2 rounded"
                        disabled={count <= 1}
                      >
                        -
                      </button>
                      <span className="p-0 m-0">{count}</span>
                      <button
                        className="bg-blue-500 p-2 rounded ml-2"
                        disabled={count >= 99}
                        onClick={increase}
                      >
                        +
                      </button>
                      */}
                      <div className="flex mt-5 justify-end ml-32">
                        {/*comment here <button className="bg-green-500 hover:bg-green-400 p-3 rounded">
                          <FaCartPlus />
                        </button>
                        */}
                        <button
                          className="bg-red-500 hover:bg-red-400 p-3 rounded  mt-32 lg:mt-0"
                          onClick={setterOn}
                        >
                          <ImExit />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
