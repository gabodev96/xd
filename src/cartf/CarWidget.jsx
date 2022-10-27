import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CarWidget = () => {
  return (
    <>
      <FaShoppingCart />
      <span>{totalProducts() || ""}</span>
    </>
  );
};

export default CarWidget;
