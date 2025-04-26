'use client'
import { useLanguage } from "@/context/languageContext";
import Image from "next/image";

export const Footer = () => {
  const { translate } = useLanguage();

  return (
    <footer className="flex flex-col justify-center items-center p-5 bg-neutral-50">
      <p  className="flex items-center  justify-center">{translate('footer', 'textB')} 
        <Image
            alt="nextjs"
           className="mx-2"
            width={50}
            height={50}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          /> 
          &
          <Image
            alt="tailwind"
            className="ml-2 -my-9"
            width={90}
            height={90}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          />
          </p>
      <p>{translate('footer', 'textA')} </p>

    </footer>
  );
};
