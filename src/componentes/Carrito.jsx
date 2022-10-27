import React from "react";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/religiosa")}>CLICKME</button>
    </div>
  );
};

export default Carrito;
