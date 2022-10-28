import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AnimateModal from "../AnimateModal/AnimateModal";
import ContadorProducts from "../ItemCount/ContadorProducts";

export const Modal = ({ initial, stock, setterOn, setterContent }) => {
  const onAdd = (quantity) => {
    toast.info(`${quantity} unidades añadidas al carrito`);
  };

  return (
    <>
      {" "}
      <div
        className=" pop_up_container shadow-2xl pt-40  2xl:pt-64"
        //Background de popup, llama a encendido modal y lo convierte a false haciendo que se oculte el modal
        onClick={setterOn}
      >
        <AnimateModal>
          <div
            className="pop_up_body rounded h-96 w-96 lg:h-72 bg-white"
            onClick={(e) => {
              // El modal no cierra si su contenido es clickeado
              e.stopPropagation();
            }}
          >
            {" "}
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
                      <ContadorProducts
                        setterOn={setterOn}
                        initial={1}
                        stock={99}
                        onAdd={onAdd}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateModal>
      </div>
    </>
  );
};
