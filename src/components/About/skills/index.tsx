"use client";
import Image from "next/image";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
  arrows: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

export const Skills = () => {
  return (
    <>
      <div className="sm:max-w-130 max-w-60 mx-auto md:mx-0">
        <Slider {...settings}>
          <Image
            alt="nextjs"
            className="rounded-sm  mx-1"
            width={70}
            height={70}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          />

          <Image
            alt="tailwind"
            className="rounded-sm "
            width={100}
            height={100}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          />

          <Image
            alt="reactjs"
            className="rounded-sm  "
            width={70}
            height={70}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          />

          <Image
            alt="javascript"
            className="rounded-sm  "
            width={70}
            height={70}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />

          <Image
            alt="typescript"
            className="rounded-sm  ml-1"
            width={70}
            height={70}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />

          <Image
            alt="html"
            className="rounded-sm  "
            width={70}
            height={70}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
          />

          <Image
            alt="css"
            className="rounded-sm  mr-5"
            width={70}
            height={70}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
          />
          <Image
            alt="css"
            className="mr-1"
            width={70}
            height={70}
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          />
        </Slider>
      </div>
    </>
  );
};
