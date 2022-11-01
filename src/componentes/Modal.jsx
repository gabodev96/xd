import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
            className="pop_up_body rounded h-72 w-96 lg:h-72 bg-white"
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
                    className="flex p-4 pop_up_card text-center"
                    key={popArray.key}
                  >
                    <img
                      src={popArray.img}
                      className="w-45 h-40 ml-2 shadow-2xl "
                    />
                    <div className="pl-2 text-left">
                      <p className="font-baloo text-md">
                        {" "}
                        <span className="font-bold font-baloo tracking-tighter">
                          Nombre:{" "}
                        </span>
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
        <ToastContainer />
      </div>
    </>
  );
};
