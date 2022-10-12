import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { lineaTentacion } from "../Data/Data";

export const Tentacion = () => {
  return (
    <>
      <AnimatedPage>
        <div className="contacto w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 lg:pt-0 justify-center w-full  h-screen">
            <div className="m-6  md:m-2">
              <div className="flex flex-col items-center justify-center   md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <div className="w-screen bg-red-500">
                  <h1 className="font-baloo underline  text-center text-2xl pt-2 decoration-white">
                    Linea Tentación
                  </h1>
                </div>
                <Gallery withCaption>
                  <div className="grid gap-4 grid-cols-3 pt-1  group">
                    {lineaTentacion.map(({ key, img, ruta, original }) => (
                      <Item
                        key={key}
                        original={original}
                        width="500"
                        height="500"
                      >
                        {({ ref, open }) => (
                          <div className=" rounded">
                            <img
                              src={img}
                              ref={ref}
                              onClick={open}
                              className="w-72 lg:w-44 2xl:w-72 border-[1px] border-black rounded"
                              alt="{title}"
                            />

                            <div className="flex justify-center pt-2 text-sm">
                              <button className="btn btn-danger text-2xl">
                                AÑADIR AL CARRITO
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
