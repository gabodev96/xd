import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import { misObjetos } from "../Data/Datos";
import { Gallery, Item } from "react-photoswipe-gallery";

export const Galeria = () => {
  return (
    <AnimatedPage>
      <>
        <div className=" w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 justify-center w-full  h-screen ">
            <div className="m-6 lg:mr-32 md:m-2">
              <div className="flex flex-col items-center justify-center  lg:flex-row xl:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <div
                  className="text-3xl md:text-5xl lg:text-5xl lg:w-1/2 text-center items-center justify-start italic font-baloo font-semibold underline decoration-red-500 antialiased"
                  data-aos="zoom-in"
                >
                  NUESTROS PRODUCTOS
                </div>
                <Gallery>
                  <div className="grid gap-4 grid-cols-3 pt-1  group">
                    {misObjetos.map((productos) => (
                      <div key={productos.key}>
                        <Item
                          original={productos.original}
                          width="500"
                          height="500"
                        >
                          {({ ref, open }) => (
                            <div className=" rounded">
                              <img
                                src={productos.original}
                                className="w-52  hover:opacity-70  border-[1px] border-black rounded"
                                alt="{title}"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    ))}
                  </div>
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
};
