import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import Religiosa from "./Religiosa";

const Productos = () => {
  return (
    <AnimatedPage>
      <div className="">
        <div className="flex  justify-center pt-2  mb-2">
          <Link to="/productos/tentacion" className="btn btn-danger btn-sm">
            {" "}
            Linea Tentación{" "}
          </Link>
          <Link to="/productos/galeria" className="btn btn-danger ml-2 btn-sm ">
            {" "}
            Todo{" "}
          </Link>
          <Link
            to="/productos/supercleaner"
            className="btn btn-danger ml-2 btn-sm"
          >
            {" "}
            SuperCleaner{" "}
          </Link>
          <Link
            to="/productos/religiosas"
            className="btn btn-danger ml-2 btn-sm"
          >
            {" "}
            Linea Religiosa{" "}
          </Link>
        </div>
        <Outlet />
      </div>
    </AnimatedPage>
  );
};

export default Productos;
