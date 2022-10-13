import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import { misObjetos } from "../Data/Data";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

export const Galeria = () => {
  const [modalContenido, setmodalContenido] = useState([]);
  const [encendidoModal, setencendidoModal] = useState(false);
  const cambiarContenido = (productos) => {
    setmodalContenido([productos]);
    setencendidoModal(!encendidoModal);
  };
  return (
    <AnimatedPage>
      <>
        <div className="contacto w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 justify-center w-full  h-screen ">
            <div className="m-6 lg:mr-32 md:m-2">
              <div className="flex flex-col items-center justify-center  lg:flex-row xl:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <div
                  className="text-3xl md:text-5xl lg:text-5xl lg:w-1/2 text-center items-center justify-start italic font-baloo font-semibold underline decoration-red-500 antialiased"
                  data-aos="zoom-in"
                >
                  NUESTROS PRODUCTOS
                </div>

                <div className="grid gap-4 grid-cols-3 pt-1  group">
                  {misObjetos.map((productos) => (
                    <div>
                      <div className=" rounded">
                        <a href={productos.ruta}>
                          <img
                            src={productos.original}
                            className="w-52  hover:opacity-70  border-[1px] border-black rounded"
                            alt="{title}"
                          />
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => cambiarContenido(productos)}
                        >
                          detalles
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {encendidoModal && (
                  <div
                    className=" pop_up_container shadow-2xl"
                    onClick={cambiarContenido}
                  >
                    <div
                      className="pop_up_body rounded h-96 w-96 lg:h-72 bg-white lg:bg-blue-500"
                      onClick={(e) => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                      }}
                    >
                      <div className="pop_up_header"></div>
                      <div className="pop_up_content">
                        {modalContenido.map((pop) => {
                          return (
                            <Gallery>
                              <Item
                                key={pop.key}
                                original={pop.original}
                                width="500"
                                height="500"
                              >
                                {({ ref, open }) => (
                                  <div className="flex pt-6 pop_up_card text-center">
                                    <img
                                      src={pop.img}
                                      onClick={open}
                                      className="w-45 h-40 ml-2 shadow-2xl border-[1px] border-gray-400 "
                                    />
                                    <div className="pl-2">
                                      <p className="font-baloo text-md">
                                        {" "}
                                        tipo: {pop.tipo}
                                      </p>
                                      <p className="font-baloo  text-md">
                                        {" "}
                                        tipo: {pop.tipo}
                                      </p>
                                      <p className="font-baloo  text-md">
                                        {" "}
                                        tipo: {pop.tipo}
                                      </p>
                                      <div className="flex">
                                        <button
                                          onClick={cambiarContenido}
                                          className="btn btn-danger mt-14 2xl:mt-20"
                                        >
                                          Cerrar
                                        </button>
                                        <button className="btn btn-primary ml-2 mt-14 2xl:mt-20">
                                          COMPRAR
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </Item>
                            </Gallery>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
};
