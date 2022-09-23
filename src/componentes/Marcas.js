import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import { Marcas2 } from "./Marcas2";

export const Marcas = () => {
  return (
    <AnimatedPage>
      <>
        <div className="contacto flex flex-col  text-center font-baloo h-screen w-screen">
          <div className="pt-24 underline decoration-red-500">
            <h1 className="text-3xl md:text-6xl font-baloo">Nuestras Marcas</h1>
          </div>

          <div className="flex  justify-evenly mx-10 mt-10 md:mt-0 lg:mt-0 xl:mt-0 ">
            <div>
              <img
                src={require("../imagenesbrand/200x200velas.png")}
                alt=""
                className=""
                srcSet=""
              />
            </div>
            <div className="px-8">
              <img
                src={require("../imagenesbrand/200x200zafiro.png")}
                alt=""
                className=""
                srcSet=""
              />
            </div>
            <div className="">
              <img
                src={require("../imagenesbrand/200x2003nsc.png")}
                alt=""
                className=""
                srcSet=""
              />
            </div>
          </div>
          <br />
          <br />
          <Marcas2 />
        </div>
      </>
    </AnimatedPage>
  );
};
