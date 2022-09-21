import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  FaHome,
  FaIndustry,
  FaImages,
  FaPhone,
  FaCopyright,
} from "react-icons/fa";
import { MdOutlinePolicy } from "react-icons/md";

import { Contacto } from "../componentes/Contacto";
import { Inicio } from "../componentes/Inicio";
import { NavLink } from "react-router-dom";
import { Galeria } from "../componentes/Galeria";
import { Marcas } from "../componentes/Marcas";
import { Nosotros } from "../componentes/Nosotros";
import { Politics } from "../componentes/Politics";

export const RouterPrincipal = () => {
  return (
    <>
      <BrowserRouter>
        <ul className="p-0 m-0  bg-gray-300">
          <nav className="w-16 lg:ml-4 hidden pr-4 lg:flex  xl:flex flex-col items-center  justify-evenly lg:justify-evenly xl:justify-evenly sticky bg-gray-300 border-r-[1px] border-r-black z-50 h-screen">
            <img
              src={require("../imagenesbrand/200x200produ3n.png")}
              className="bg-white rounded-full border border-red-500"
              alt=""
            />

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "group")}
                to="/"
              >
                {" "}
                <FaHome size={35} className="bigred" color={"#007bff"} />
                <span className="absolute w-auto p-2 ym-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  Inicio
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "group")}
                to="/nosotros"
              >
                {" "}
                <FaIndustry size={35} className="bigred" color={"#007bff"} />
                <span className="absolute w-auto p-2 ym-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  Nosotros
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "group")}
                to="/galeria"
              >
                {" "}
                <FaImages size={35} className="bigred" color={"#007bff"} />
                <span className="absolute w-auto p-2 ym-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  Galeria de productos
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "group")}
                to="/contacto"
              >
                {" "}
                <FaPhone size={35} className="bigred" color={"#007bff"} />
                <span className="absolute w-auto p-2 ym-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  Contactanos
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "group")}
                to="/marcas"
              >
                {" "}
                <FaCopyright size={35} className="bigred" color={"#007bff"} />
                <span className="absolute w-auto p-2 ym-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  Nuestras Marcas
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "group")}
                to="/politicas"
              >
                {" "}
                <MdOutlinePolicy
                  size={35}
                  className="bigred"
                  color={"#007bff"}
                />
                <span className="absolute w-auto p-2 ym-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  Políticas
                </span>
              </NavLink>
            </li>
          </nav>
        </ul>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/politicas" element={<Politics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
