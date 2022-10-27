import React from "react";
import { CenterComponent } from "../componentsPolitics/CenterComponent";
import { AnimatedPage } from "./AnimatedPage";

export const Politics = () => {
  return (
    <>
      <AnimatedPage>
        <div className="w-screen h-screen bg-gray-400 flex lg:p-16 lg:pr-20  ">
          <CenterComponent />
        </div>
      </AnimatedPage>
    </>
  );
};
