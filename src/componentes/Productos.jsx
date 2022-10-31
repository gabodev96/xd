import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import Religiosa from "./Religiosa";

const Productos = () => {
  return (
    <AnimatedPage>
      <div className="">
        <div className="flex  justify-center pt-2  mb-2">
          <Link to="/productos/tentacion" className="btn btn-danger">
            {" "}
            Linea Tentación{" "}
          </Link>
          <Link to="/productos/galeria" className="btn btn-danger ml-2 ">
            {" "}
            Todo{" "}
          </Link>
          <Link to="/productos/supercleaner" className="btn btn-danger ml-2">
            {" "}
            SuperCleaner{" "}
          </Link>
        </div>
        <Outlet />
      </div>
    </AnimatedPage>
  );
};

export default Productos;
