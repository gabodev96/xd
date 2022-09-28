import React from "react";
import { AnimatedPage } from "./AnimatedPage";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

export const Galeria = () => {
  return (
    <AnimatedPage>
      <>
        <div className="contacto w-screen h-screen ">
          <div className="flex pt-10 md:pt-18 justify-center w-full  h-screen ">
            <div className=" m-6 lg:mr-32 md:m-6 ">
              <div className="flex flex-col items-center justify-center  lg:flex-row xl:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                <div
                  className="text-3xl md:text-5xl lg:text-5xl lg:w-1/2 text-center items-center justify-start font-baloo font-semibold underline decoration-red-500 antialiased"
                  data-aos="zoom-in"
                >
                  NUESTROS PRODUCTOS
                </div>
                <Gallery withCaption>
                  <div className="grid gap-4 grid-cols-3 pt-10  group">
                    <Item
                      original={require("../images2/image1.jpg")}
                      thumbnail={require("../images2/image1.jpg")}
                      width="700"
                      height="700"
                      caption="<h1>CLORO 3N 1 LITRO</h1>"
                    >
                      {({ ref, open }) => (
                        <div className="  border-[1px]  border-black rounded">
                          <img
                            ref={ref}
                            onClick={open}
                            src={require("../images2/image1.jpg")}
                            alt=""
                            className="w-72 rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                              <div className="font-normal">
                                <p className="text-sm">Cloro Blanqueador 3N</p>
                                <p className="text-xs">Presentación 1L</p>
                              </div>
                              <div className="flex items-center">
                                <img src="" alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Item>
                    <Item
                      original={require("../images2/image2.jpg")}
                      thumbnail={require("../images2/image2.jpg")}
                      width="700"
                      height="700"
                    >
                      {({ ref, open }) => (
                        <div className=" border-[1px] border-black rounded">
                          <img
                            ref={ref}
                            onClick={open}
                            src={require("../images2/image2.jpg")}
                            alt=""
                            className="w-72 rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                              <div className="font-normal">
                                <p className="text-sm">Cloro Blanqueador 3N</p>
                                <p className="text-xs">Presentación 1L</p>
                              </div>
                              <div className="flex items-center">
                                <img src="" alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Item>
                    <Item
                      original={require("../images2/image3.jpg")}
                      thumbnail={require("../images2/image3.jpg")}
                      width="700"
                      height="700"
                    >
                      {({ ref, open }) => (
                        <div className=" border-[1px] border-black rounded">
                          <img
                            ref={ref}
                            onClick={open}
                            src={require("../images2/image3.jpg")}
                            alt=""
                            className="w-72 rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                              <div className="font-normal">
                                <p className="text-sm">Cloro Blanqueador 3N</p>
                                <p className="text-xs">Presentación 1L</p>
                              </div>
                              <div className="flex items-center">
                                <img src="" alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Item>
                    <Item
                      original={require("../images2/image4.jpg")}
                      thumbnail={require("../images2/image4.jpg")}
                      width="700"
                      height="700"
                    >
                      {({ ref, open }) => (
                        <div className="border-[1px] border-black rounded">
                          <img
                            ref={ref}
                            onClick={open}
                            src={require("../images2/image4.jpg")}
                            alt=""
                            className="w-72 rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                              <div className="font-normal">
                                <p className="text-sm">Cloro Blanqueador 3N</p>
                                <p className="text-xs">Presentación 1L</p>
                              </div>
                              <div className="flex items-center">
                                <img src="" alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Item>
                    <Item
                      original={require("../images2/image5.jpg")}
                      thumbnail={require("../images2/image5.jpg")}
                      width="700"
                      height="700"
                    >
                      {({ ref, open }) => (
                        <div className="border-[1px] border-black rounded">
                          <img
                            ref={ref}
                            onClick={open}
                            src={require("../images2/image5.jpg")}
                            alt=""
                            className="w-72 rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                              <div className="font-normal">
                                <p className="text-sm">Cloro Blanqueador 3N</p>
                                <p className="text-xs">Presentación 1L</p>
                              </div>
                              <div className="flex items-center">
                                <img src="" alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Item>
                    <Item
                      original={require("../images2/image6.jpg")}
                      thumbnail={require("../images2/image6.jpg")}
                      width="700"
                      height="700"
                    >
                      {({ ref, open }) => (
                        <div className=" border-[1px] border-black rounded">
                          <img
                            ref={ref}
                            onClick={open}
                            src={require("../images2/image6.jpg")}
                            alt=""
                            className="w-72 rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                              <div className="font-normal">
                                <p className="text-sm">Cloro Blanqueador 3N</p>
                                <p className="text-xs">Presentación 1L</p>
                              </div>
                              <div className="flex items-center">
                                <img src="" alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Item>
                  </div>
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
};
