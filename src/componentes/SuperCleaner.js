import React from "react";

import { lineaSupercleaner } from "../Data/Data";

const SuperCleaner = () => {
  return (
    <>
      {" "}
      <div className="contacto w-screen h-screen ">
        <div className="flex pt-10 md:pt-18 lg:pt-0 justify-center w-full  h-screen">
          <div className="m-6  md:m-2">
            <div className="flex flex-col items-center justify-center   md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
              <div className="w-screen bg-blue-500">
                <h1 className="font-baloo underline  text-center text-2xl pt-2 decoration-white">
                  Linea Super Cleaner
                </h1>
              </div>

              <div className="grid gap-4 grid-cols-3 pt-1  group">
                {lineaSupercleaner.map((productos) => (
                  <div>
                    <div className=" rounded">
                      <img
                        src={productos.original}
                        className="w-44   border-[1px] border-black rounded"
                        alt="{title}"
                      />
                    </div>
                    <div className="flex justify-center pt-2 text-sm">
                      <button className="btn btn-danger text-2xl">
                        AÑADIR AL CARRITO
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperCleaner;
