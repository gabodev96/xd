import React from "react";

export const Historia = () => {
  return (
    <>
      <div className="bg-white contacto text-center font-baloo pt-2 rounded w-full  h-screen">
        <h1 className="font-baloo font-semibold">Historia</h1>
        <div className="flex  justify-center ">
          <img
            src={require("../images2/book.gif")}
            className="w-2/12 md:w-20 lg:w-32  rounded-full "
            alt=""
          />
        </div>
        <p className="text-justify overflow-hidden font-bold font-baloo mt-2  mx-2 lg:mx-96">
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I was a marine biologist.
        </p>
      </div>
    </>
  );
};
