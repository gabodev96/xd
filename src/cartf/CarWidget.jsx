import React from "react";

import { useCartContext } from "../context/CartContext";

const CarWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
      <span>{totalProducts() || ""}</span>
    </>
  );
};

export default CarWidget;
