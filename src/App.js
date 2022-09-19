import "./App.css";

import { RouterPrincipal } from "./routers/RouterPrincipal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const notify = () =>
      toast.info("Usa la barra de navegación para desplazarte", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 60000,
      });

    notify();
  }, []);
  return (
    <>
      <nav className="navbare flex  lg:hidden xl:hidden border-b border-black">
        <div className="navbare-contenedor contenedor">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items ">
            <li>
              <a href="/inicio" className="font-baloo">
                Inicio
              </a>
            </li>
            <li>
              <a href="/nosotros" className="font-baloo">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/contacto" className="font-baloo">
                Contacto
              </a>
            </li>
            <li>
              <a href="/galeria" className="font-baloo">
                Galeria
              </a>
            </li>
            <li>
              <a href="/marcas" className="font-baloo">
                Marcas
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex h-screen w-full ">
        <RouterPrincipal />
        <ToastContainer className="hidden lg:flex md:flex xl:flex" />
      </div>
    </>
  );
}

export default App;
