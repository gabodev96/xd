import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addproductos = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((productos) => {
          return productos.id === item.id
            ? { ...productos, quantity: productos.quantity + quantity }
            : productos;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalproductoss = () =>
    cart.reduce(
      (acumulador, productosoActual) => acumulador + productosoActual.quantity,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((productos) => productos.id === id) ? true : false;

  const removeproductos = (id) =>
    setCart(cart.filter((productos) => productos.id !== id));
  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeproductos,
        addproductos,
        totalPrice,
        totalproductoss,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
