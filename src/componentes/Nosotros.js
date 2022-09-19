import React from "react";
import { Historia } from "../componentesUs/Historia";
import { Mision } from "../componentesUs/Mision";
import { Vision } from "../componentesUs/Vision";
import { AnimatedPage } from "./AnimatedPage";

export const Nosotros = () => {
  return (
    <AnimatedPage>
      <div className="flex  w-screen h-full flex-col  bg-gray-300 lg:pr-24">
        <div className="flex">
          <Mision />
          <Vision />
        </div>
        <div className="p-2 h-4/5">
          <Historia />
        </div>
      </div>
    </AnimatedPage>
  );
};
