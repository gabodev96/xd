import React from "react";
import { AnimatedPage } from "./AnimatedPage";

export const Contacto = () => {
  return (
    <AnimatedPage>
      <>
        <div className="flex contacto justify-center w-screen md:items-start lg:items-center xl:items-center items-center h-screen overflow-hidden bg-gray-400">
          <div class="containeru">
            <div class="contact-box md:rounded-tl-md md:rounded-bl-md">
              <div class="left md:rounded-tl-md md:rounded-bl-md  "></div>
              <div class="right">
                <h2 className="font-baloo">Contactanos</h2>
                <input type="text" class="field" placeholder="Nombre" />
                <input type="text" class="field" placeholder="Email" />
                <input type="text" class="field" placeholder="Telefono" />
                <textarea
                  placeholder="Mensaje"
                  class="field resize-none"
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
