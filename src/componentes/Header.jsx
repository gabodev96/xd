import React from "react";
import {
  FaHome,
  FaIndustry,
  FaImages,
  FaPhone,
  FaCopyright,
} from "react-icons/fa";
import { MdOutlinePolicy } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className=" flex-wrap
          items-center
          justify-between
          w-full
          hidden
          h-16
          lg:flex
          md:hidden
          px-4
          text-lg text-gray-700
          bg-gray-300
          border-b border-black"
      >
        <div>
          <img
            src={require("../imagenesbrand/200x200produ3n.png")}
            className="bg-white  rounded-full w-1/4 border border-red-500"
            alt=""
          />
        </div>
        <ul
          className=" pt-2
              text-base text-gray-700
              flex
               flex-wrap
            "
        >
          <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/"
            >
              {" "}
              <FaHome size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50  rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Inicio
              </span>
            </NavLink>
          </li>

          <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/nosotros"
            >
              {" "}
              <FaIndustry size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50  rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Nosotros
              </span>
            </NavLink>
          </li>
          {/*  <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/galeria"
            >
              {" "}
              <FaImages size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50  rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Galeria de productos
              </span>
            </NavLink>
          </li>
          */}
          <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/productos/galeria"
            >
              {" "}
              <FaImages size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Religiosa
              </span>
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/contacto"
            >
              {" "}
              <FaPhone size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50  rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Contactanos
              </span>
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/marcas"
            >
              {" "}
              <FaCopyright size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50  rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Nuestras Marcas
              </span>
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "group")}
              to="/politicas"
            >
              {" "}
              <MdOutlinePolicy size={35} className="bigred" color={"#007bff"} />
              <span className="absolute w-auto p-2  z-50 rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                Políticas
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
