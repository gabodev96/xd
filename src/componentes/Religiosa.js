import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { lineaReligiosa } from "../Data/Data";

const Religiosa = () => {
  return (
    <>
      <>
        <div className="contacto w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 lg:pt-0 justify-center w-full  h-screen">
            <div className="m-6  md:m-2">
              <div className="flex flex-col items-center justify-center   md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <div className="w-screen bg-red-500">
                  <h1 className="font-baloo underline  text-center text-2xl pt-2 decoration-white">
                    Linea Religiosa
                  </h1>
                </div>
                <Gallery>
                  <div className="grid gap-4 grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6 pt-1  group">
                    {lineaReligiosa.map((productos) => (
                      <div>
                        <Item
                          key={productos.key}
                          original={productos.original}
                          width="500"
                          height="500"
                        >
                          {({ ref, open }) => (
                            <div className="image rounded">
                              <img
                                src={productos.original}
                                className="w-44  z-50 2xl:w-72 border-[1px] border-black rounded"
                                alt="{title}"
                              />
                              <div class="overlay flex">
                                <img
                                  src={require("../images2/lupa.png")}
                                  className="justify-center items-center text-center p-20 "
                                  ref={ref}
                                  onClick={open}
                                />
                              </div>
                            </div>
                          )}
                        </Item>
                        <div className="flex justify-center pt-2 text-sm">
                          <button className="btn btn-danger text-2xl">
                            AÑADIR AL CARRITO
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Religiosa;
