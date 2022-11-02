import "./App.css";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import {
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
  NavLink,
} from "react-router-dom";

import { Contacto } from "./componentes/Contacto";
import { Inicio } from "./componentes/Inicio";

import { Marcas } from "./componentes/Marcas";
import { Nosotros } from "./componentes/Nosotros";
import { Politics } from "./componentes/Politics";

import Religiosa from "./componentes/Religiosa";

import Carrito from "./componentes/Carrito";
import Header from "./componentes/Header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { CartProvider } from "./context/CartContext";
import { Modal } from "./componentes/Modal";

import { Tentacion } from "./componentes/Tentacion";
import Productos from "./componentes/Productos";

import { compose } from "@mui/system";
import Prueba from "./componentes/Prueba";
import Detergentes from "./componentes/Detergentes";
import CarWidget from "./cartf/CarWidget";
import Velasreligiosas from "./componentes/Velasreligiosas";
export const CartContext = React.createContext("");

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbare flex  lg:hidden xl:hidden border-b border-black top-0 sticky">
        <div className="navbare-contenedor contenedor">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items ">
            <li>
              <NavLink to="/inicio" className="font-baloo ">
                Inicio
              </NavLink>
            </li>
            <li>
              <a onClick={() => navigate("/nosotros")} className="font-baloo">
                Nosotros
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/contacto")} className="font-baloo">
                Contacto
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/productos/galeria")}
                className="font-baloo"
              >
                Galeria
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/marcas")} className="font-baloo">
                Marcas
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <FloatingWhatsApp
        accountName="Velas 3N Soporte"
        avatar={require("./imagenesbrand/3nchat.png")}
        allowEsc
        statusMessage="En Linea"
        phoneNumber="5804126952114"
        chatMessage={
          <>
            Hola <br />
            <br /> ¿Cómo podemos ayudarte?
          </>
        }
        placeholder="Escribe un mensaje"
        allowClickAway
        notification
        notificationDelay="5"
        notificationSound={true}
      />
      <div className="flex flex-col  h-screen w-full ">
        <CartProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />

            <Route path="/marcas" element={<Marcas />} />
            <Route path="/politicas" element={<Politics />} />
            <Route path="/tentacion" element={<Tentacion />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/detergentes" element={<Detergentes />} />

            <Route path="/pop" element={<Modal />} />
            <Route
              path="/productos"
              element={
                <div className="contacto w-screen h-screen">
                  <Productos />
                </div>
              }
            >
              <Route path="galeria" element={<Religiosa />} />
              <Route path="supercleaner" element={<Detergentes />} />
              <Route path="tentacion" element={<Prueba />} />
              <Route path="religiosas" element={<Velasreligiosas />} />
            </Route>
          </Routes>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
