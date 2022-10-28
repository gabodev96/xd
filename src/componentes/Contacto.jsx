import { AnimatedPage } from "./AnimatedPage";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export const Contacto = () => {
  const notify = () => toast.info("Enviado!");
  const notierror = () => toast.error("Error al enviar verifique su conexión!");
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailService",
        "template_2e834dv",
        e.target,
        "-82w2BuUBWVFNOWu3"
      )
      .then(
        (result) => {
          notify();
        },
        (error) => {
          notierror();
        }
      );
  }

  return (
    <AnimatedPage>
      <>
        <div className="flex contacto justify-center w-screen lg:items-center md:items-start  h-screen overflow-hidden bg-gray-400">
          <form onSubmit={enviarEmail}>
            <div className="contact-box md:rounded-tl-md md:rounded-bl-md mt-10 lg:mb-24">
              <div className="left hidden  md:flex lg:flex xl:flex md:rounded-tl-md md:rounded-bl-md  ">
                <div className="flex justify-center items-end">
                  <a href="https://www.facebook.com/Productos3N">
                    {" "}
                    <FaFacebook
                      size={35}
                      color={"#4267B2"}
                      className="cicons"
                    />
                  </a>

                  <a href="https://instagram.com/productos3n?igshid=YmMyMTA2M2Y=">
                    <FaInstagram
                      size={35}
                      id="ig"
                      color={"pink"}
                      className="cicons"
                    />
                  </a>

                  <a href="https://www.youtube.com/channel/UCim8iTTwwZIzpwAGv-gubXQ">
                    <FaYoutube size={35} color={"red"} className="cicons" />
                  </a>
                </div>
              </div>
              <div className="right">
                <h2 className="font-baloo">Contactanos</h2>
                <input
                  type="text"
                  name="subject"
                  className="hidden"
                  value="CORREO PAGINA WEB"
                  readOnly
                />
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
            <ToastContainer />
          </form>
        </div>
      </>
    </AnimatedPage>
  );
};
