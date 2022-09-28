import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const Inicio = () => {
  return (
    <AnimatedPage>
      <Carousel
        variant="dark"
        className="-z-10 md:-z-10 lg:z-0 xl:z0"
        style={{ zIndex: 1 }}
      >
        <Carousel.Item>
          <img
            className="w-screen h-screen object-cover lg:object-fill"
            src={require("../bannerimages/banner.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-screen h-screen object-cover lg:object-fill"
            src={require("../bannerimages/banner.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-screen h-screen object-cover lg:object-fill"
            src={require("../bannerimages/banner.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </AnimatedPage>
  );
};
