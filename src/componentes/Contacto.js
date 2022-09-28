import { AnimatedPage } from "./AnimatedPage";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export const Contacto = () => {
  return (
    <AnimatedPage>
      <>
        <div className="flex contacto justify-center w-screen lg:items-center md:items-start  h-screen overflow-hidden bg-gray-400">
          <form>
            <div className="contact-box md:rounded-tl-md md:rounded-bl-md mt-10 lg:mt-0">
              <div className="left hidden  md:flex lg:flex xl:flex md:rounded-tl-md md:rounded-bl-md  ">
                <div className="m-auto flex">
                  <a href="https://www.facebook.com">
                    {" "}
                    <FaFacebook
                      size={35}
                      color={"#4267B2"}
                      className="cicons"
                    />
                  </a>

                  <a href="https://www.instagram.com">
                    <FaInstagram size={35} id="ig" className="cicons" />
                  </a>

                  <a href="https://www.youtube.com">
                    <FaYoutube size={35} color={"red"} className="cicons" />
                  </a>
                </div>
              </div>
              <div className="right">
                <h2 className="font-baloo">Contactanos</h2>
                <input
                  type="text"
                  name="nombre"
                  className="field p-1"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  name="correo"
                  className="field  p-1"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  className="field  p-1"
                  placeholder="Telefono"
                />
                <textarea
                  placeholder="Mensaje"
                  name="message"
                  className="field resize-none  p-1"
                ></textarea>
                <button className="bte rounded bg-blue-500">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </>
    </AnimatedPage>
  );
};
