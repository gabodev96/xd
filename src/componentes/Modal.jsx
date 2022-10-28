import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import ContadorProducts from "../ItemCount/ContadorProducts";

export const Modal = ({ initial, stock, setterOn, setterContent }) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
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
                  className="flex pt-2 pop_up_card text-center"
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
                    <div className="text-black">
                      <div className="-mt-5  ">
                        <ContadorProducts
                          initial={2}
                          stock={1000}
                          onAdd={onAdd}
                        />
                      </div>

                      <div className="flex  mt-40 lg:mt-16  ml-24  justify-end">
                        <button className="bg-green-500 hover:bg-green-400 p-3 rounded group">
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
