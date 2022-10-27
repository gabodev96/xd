import React from "react";

export const Historia = () => {
  return (
    <>
      <div className="bg-white contacto text-center font-baloo pt-2 rounded w-full  h-screen">
        <h1 className="font-baloo font-semibold">Historia</h1>
        <div className="flex  justify-center ">
          <img
            src={require("../images2/book.gif")}
            className="w-2/12 md:w-20 lg:w-16  rounded-full "
            alt=""
          />
        </div>
        <p className="text-justify  overflow-hidden tracking-tighter mt-2  mx-5 lg:mx-96 font-baloo font-bold text-xs md:text-sm lg:text-lg">
          Fundada en el año 1997 y hoy 25 años transcurridos somos una empresa
          que ha venido creciendo en expansión, consolidación y con miras a
          posicionar a la empresa en el mercado industrial de fabricación de
          Velas, Velones tanto para el territorio Nacional e Internacional, así
          como productos de limpieza.
        </p>
      </div>
    </>
  );
};
