import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import { misObjetos } from "../Data/Data";
import { useState } from "react";

export const Galeria = () => {
  const [popupContent, setpopupContent] = useState([]);
  const [popupTogle, setpopupTogle] = useState(false);
  const changeContent = (productos) => {
    setpopupContent([productos]);
    setpopupTogle(!popupTogle);
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
                          onClick={() => changeContent(productos)}
                        >
                          detalles
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {popupTogle && (
                  <div className="pop_up_container">
                    <div className="pop_up_body rounded h-50">
                      <div className="pop_up_header">
                        <button
                          className="text-black bg-red-500 p-2 rounded"
                          onClick={changeContent}
                        >
                          X
                        </button>
                      </div>
                      <div className="pop_up_content">
                        {popupContent.map((pop) => {
                          return (
                            <div className="pop_up_card text-center">
                              <p> tipo: {pop.tipo}</p>
                              <img src={pop.img} className="w-45 h-40 pl-10" />
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
      </>
    </AnimatedPage>
  );
};
