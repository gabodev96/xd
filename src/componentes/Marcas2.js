import React, { useState } from "react";
import { motion } from "framer-motion";

export const Marcas2 = () => {
  const [mostrar, setMostrar] = useState(false);

  const onClick = () => {
    setMostrar(!mostrar);
  };

  return (
    <>
      {mostrar && (
        <motion.div
          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="xd"
          id="contenedor"
        >
          <div className="flex justify-evenly mx-10">
            <div>
              <img
                src={require("../imagenesbrand/200x200velas.png")}
                alt=""
                className=""
                srcSet=""
              />
            </div>
            <div className="px-8">
              <img
                src={require("../imagenesbrand/200x200velas.png")}
                alt=""
                className=""
                srcSet=""
              />
            </div>
            <div className="">
              <img
                src={require("../imagenesbrand/200x200velas.png")}
                alt=""
                className=""
                srcSet=""
              />
            </div>
          </div>
        </motion.div>
      )}
      <br />
      <br />
      <div>
        <button className="btn btn-danger" onClick={onClick}>
          {mostrar ? "Ocultar" : "VER MAS"}
        </button>
      </div>
    </>
  );
};
