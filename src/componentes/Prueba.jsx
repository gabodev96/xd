import React, { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { misObjetos } from "../Data/Datos";
import { AnimatedPage } from "./AnimatedPage";
import { Modal } from "./Modal";
const Prueba = () => {
  const [modalContenido, setmodalContenido] = useState([]);
  const [encendidoModal, setencendidoModal] = useState(false);
  const cambiarContenido = (productos) => {
    setmodalContenido([productos]);
    setencendidoModal(!encendidoModal);
  };
  const [data, setData] = useState([]);

  let filtrados = misObjetos;

  let filtradosArray = filtrados.filter((e) => e.category === "tentacion");

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(filtradosArray);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <AnimatedPage>
        <Gallery withCaption>
          <div className=" w-screen h-screen ">
            <div className="flex  md:pt-18 lg:pt-0 justify-center w-full  h-screen">
              <div className="m-6  md:m-2">
                <div className="flex flex-col items-center justify-center   md:space-y-0  md:mb-24 md:justify-end">
                  <h1 className="font-baloo   text-center text-6xl pt-2 ">
                    Linea Tentación
                  </h1>

                  <div className="grid gap-4  grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6 pt-1  group">
                    {data.map((productos) => (
                      <div key={productos.key}>
                        <div>
                          <Item
                            original={productos.original}
                            width="500"
                            height="500"
                            caption={productos.desc}
                          >
                            {({ ref, open }) => (
                              <div className="image " ref={ref} onClick={open}>
                                <img
                                  src={productos.original}
                                  className="w-32  z-50 2xl:w-64  border-[1px] border-black rounded"
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
                            className="botoncito"
                            onClick={() => cambiarContenido(productos)}
                          >
                            VER DETALLES
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {encendidoModal && (
                    <Modal
                      setterOn={cambiarContenido}
                      setterModal={setmodalContenido}
                      setterContent={modalContenido}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Gallery>
      </AnimatedPage>
    </>
  );
};

export default Prueba;
