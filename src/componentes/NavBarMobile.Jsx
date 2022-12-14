import React from "react";

const NavBarMobile = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default NavBarMobile;
