import React, { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { lineaReligiosa } from "../Data/Data";

const Religiosa = () => {
  const [modalContenido, setmodalContenido] = useState([]);
  const [encendidoModal, setencendidoModal] = useState(false);
  const cambiarContenido = (productos) => {
    setmodalContenido([productos]);
    setencendidoModal(!encendidoModal);
  };
  return (
    <>
      <Gallery>
        <div className="contacto w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 lg:pt-0 justify-center w-full  h-screen">
            <div className="m-6  md:m-2">
              <div className="flex flex-col items-center justify-center   md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <div className="w-screen bg-red-500">
                  <h1 className="font-baloo underline  text-center text-2xl pt-2 decoration-white">
                    Linea Religiosa
                  </h1>
                </div>

                <div className="grid gap-4 grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6 pt-1  group">
                  {lineaReligiosa.map((productos) => (
                    <div key={productos.key}>
                      <div>
                        <Item
                          original={productos.original}
                          width="500"
                          height="500"
                        >
                          {({ ref, open }) => (
                            <div className="image " ref={ref} onClick={open}>
                              <img
                                src={productos.original}
                                className="w-44  z-50 2xl:w-72 border-[1px] border-black rounded"
                                alt="{title}"
                              />
                              <div className="overlay flex">
                                <img
                                  src={require("../images2/lupa.png")}
                                  className="justify-center items-center  object-cover text-center m-7 lg:m-14 2xl:m-28 "
                                />
                              </div>
                            </div>
                          )}
                        </Item>
                      </div>

                      <div className="flex justify-center pt-2 text-sm">
                        <button
                          className="btn btn-danger"
                          onClick={() => cambiarContenido(productos)}
                        >
                          VER DETALLES
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
                      <div className="pop_up_content">
                        {modalContenido.map((pop) => {
                          return (
                            <div className="flex pt-6 pop_up_card text-center">
                              <img
                                src={pop.img}
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
                                <div className="flex h-22">
                                  <button
                                    onClick={cambiarContenido}
                                    className="btn btn-danger mt-14 2xl:mt-20"
                                  >
                                    Cerrar
                                  </button>
                                  <button className="btn btn-primary ml-2 mt-14 2xl:mt-20 ">
                                    AÑADIR AL CARRITO
                                  </button>
                                </div>
                              </div>
                            </div>
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
      </Gallery>
    </>
  );
};

export default Religiosa;
