import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const Inicio = () => {
  return (
    <AnimatedPage>
      <Carousel variant="dark" className="-z-10 md:-z-10 lg:z-0 xl:z0">
        <Carousel.Item className="">
          <img
            className="w-screen h-128 lg:h-screen 2xl:h-160 object-cover"
            src={require("../bannerimages/banner.png")}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </AnimatedPage>
  );
};
