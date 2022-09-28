import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const Inicio = () => {
  return (
    <AnimatedPage>
      <Carousel variant="dark" className="-z-10 md:-z-10 lg:z-0 xl:z0">
        <Carousel.Item>
          <img
            className="w-screen h-screen object-cover lg:object-fill"
            src="https://picsum.photos/1920/1080"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-screen h-screen object-cover lg:object-fill"
            src="https://picsum.photos/1920/1079"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-screen h-screen object-cover lg:object-fill"
            src="https://picsum.photos/1920/1078"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </AnimatedPage>
  );
};
