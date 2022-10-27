import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const Inicio = () => {
  return (
    <AnimatedPage>
      <Carousel variant="dark" className="-z-10 md:-z-10 lg:z-0 xl:z0">
        <Carousel.Item className="2xl:px-28">
          <img
            className="w-128 h-128 object-cover lg:object-contain  2xl:h-160  2xl:object-fill"
            src={require("../bannerimages/banner.png")}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </AnimatedPage>
  );
};
