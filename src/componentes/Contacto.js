import React from "react";
import { AnimatedPage } from "./AnimatedPage";

export const Contacto = () => {
  return (
    <AnimatedPage>
      <>
        <div className="flex contacto justify-center w-screen lg:items-center md:items-start  h-screen overflow-hidden bg-gray-400">
          <div class="containeru">
            <div class="contact-box md:rounded-tl-md md:rounded-bl-md mt-10 lg:mt-0">
              <div class="left hidden  md:flex lg:flex xl:flex md:rounded-tl-md md:rounded-bl-md  "></div>
              <div class="right">
                <h2 className="font-baloo">Contactanos</h2>
                <input type="text" className="field p-1" placeholder="Nombre" />
                <input type="text" className="field  p-1" placeholder="Email" />
                <input
                  type="text"
                  className="field  p-1"
                  placeholder="Telefono"
                />
                <textarea
                  placeholder="Mensaje"
                  class="field resize-none  p-1"
                ></textarea>
                <button class="bte rounded bg-blue-500">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
};
