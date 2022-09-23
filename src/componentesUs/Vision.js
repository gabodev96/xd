import React from "react";

export const Vision = () => {
  return (
    <div className=" text-center rounded font-baloo font-bold w-3/6 mr-2 mt-2  lg:mr-2  pt-2 contacto bg-white h-80">
      <h1 className="font-baloo font-semibold">Vision</h1>
      <div className="flex  justify-center ">
        <img
          src={require("../images2/ojo.gif")}
          className=" w-10 md:w-20 lg:w-32 rounded-full "
          alt=""
        />
      </div>
      <div className=" text-justify mt-2 md:mt-2 flex overflow-hidden mx-2  lg:mx-24 ">
        <p className="font-baloo font-light lg:font-bold">
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me.
        </p>
      </div>
    </div>
  );
};
