"use client";
import { useLanguage } from "@/context/languageContext";
import Slider from "react-slick";
import { Card } from "./Card";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,

  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        arrows: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
      },
    },
  ],
};
export const Projects = () => {
  const { translate } = useLanguage();
  return (
    <>
      <Slider
        {...settings}
        className=" slider-container sm:max-w-200 md:max-w-280 max-w-75 gap-3 mx-auto"
      >
        <Card
          textContent={translate("projects", "projetctA")}
          imgUrl={"Rita.svg"}
          link="https://app.ritasaude.com.br/"
        />

        <Card
          textContent={translate("projects", "projetctB")}
          imgUrl={"sabinlogo.png"}
          link="https://sabin.com.br/"
        />

        <Card
          textContent={translate("projects", "projetctC")} 
          imgUrl={"marvel.webp"}
          link="https://marvelcharacterslucas.netlify.app/"
        />
      </Slider>
    </>
  );
};
