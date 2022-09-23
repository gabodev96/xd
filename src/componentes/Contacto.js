import React, { useState } from "react";
import { AnimatedPage } from "./AnimatedPage";
import axios from "axios";

export const Contacto = () => {
  const [input, setInput] = useState({
    nombre: "",
    correo: "",
    phone: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      nombre: input.nombre,
      correo: input.correo,
      phone: input.phone,
      message: input.message,
    };

    axios.post("http://localhost:3000/contacto", newNote);
  }

  return (
    <AnimatedPage>
      <>
        <div className="flex contacto justify-center w-screen lg:items-center md:items-start  h-screen overflow-hidden bg-gray-400">
          <form>
            <div className="contact-box md:rounded-tl-md md:rounded-bl-md mt-10 lg:mt-0">
              <div className="left hidden  md:flex lg:flex xl:flex md:rounded-tl-md md:rounded-bl-md  "></div>
              <div className="right">
                <h2 className="font-baloo">Contactanos</h2>
                <input
                  type="text"
                  onChange={handleChange}
                  name="nombre"
                  value={input.nombre}
                  className="field p-1"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="correo"
                  value={input.correo}
                  className="field  p-1"
                  placeholder="Email"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="phone"
                  value={input.phone}
                  className="field  p-1"
                  placeholder="Telefono"
                />
                <textarea
                  placeholder="Mensaje"
                  onChange={handleChange}
                  name="message"
                  value={input.message}
                  className="field resize-none  p-1"
                ></textarea>
                <button
                  onClick={handleClick}
                  className="bte rounded bg-blue-500"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    </AnimatedPage>
  );
};
