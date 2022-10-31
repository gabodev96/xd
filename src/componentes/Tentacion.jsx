import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { misObjetos } from "../Data/Datos";

export const Tentacion = () => {
  let filtrados = misObjetos;

  let filtradosArray = filtrados.filter((e) => e.category === "tentacion");
  return (
    <>
      <AnimatedPage>
        <div className=" w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 lg:pt-0 justify-center w-full  h-screen">
            <div className="m-6  md:m-2">
              <div className="flex flex-col items-center justify-center   md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <h1 className="font-baloo underline  text-center text-6xl pt-2 decoration-white">
                  Linea Tentación
                </h1>

                <Gallery withCaption>
                  <div className="grid gap-4 grid-cols-3 lg:grid-cols-6 2xl:grid-cols-3 pt-1  group">
                    {filtradosArray.map((productos) => (
                      <Item
                        key={productos.key}
                        original={productos.original}
                        width="500"
                        height="500"
                      >
                        {({ ref, open }) => (
                          <div className=" rounded">
                            <img
                              src={productos.img}
                              ref={ref}
                              onClick={open}
                              className="w-72 lg:w-32 2xl:w-72 border-[1px] border-black rounded"
                              alt="{title}"
                            />

                            <div className="flex justify-center pt-2 text-sm">
                              <button className="botoncito">
                                VER DETALLES
                              </button>
                            </div>
                          </div>
                        )}
                      </Item>
                    ))}
                  </div>
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};
