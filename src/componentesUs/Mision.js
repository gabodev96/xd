import React from "react";

export const Mision = () => {
  return (
    <div className=" w-3/6 lg:m-2 text-center font-baloo  pt-2 rounded contacto bg-white h-80  m-2">
      <h1 className="font-baloo pt-2 font-semibold">Mision</h1>
      <div className="flex  justify-center ">
        <img
          src={require("../images2/misiones.gif")}
          className="w-10 md:w-20 lg:w-32 rounded-full"
          alt=""
        />
      </div>
      <div className=" text-justify mt-2 md:mt-2 flex overflow-hidden mx-2  lg:mx-24 ">
        <p className="font-baloo font-bold">
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me.
        </p>
      </div>
    </div>
  );
};
