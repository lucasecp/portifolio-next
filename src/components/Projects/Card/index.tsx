'use client'
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/languageContext";
import Image from "next/image";

interface CardProps {
  imgUrl: string;
  textContent: string;
  link: string;
}

export const Card = ({ imgUrl, textContent, link }: CardProps) => {
  const { translate } = useLanguage();

  return (
    <>
      <div className="sm:min-w-60 min-w-50 mx-2 bg-neutral-50 shadow-sm rounded-4xl sm:p-4 p-3 flex flex-col items-center">
        <Image
          src={"/icons/" + imgUrl}
          width={150}
          height={150}
          alt="Picture of the author"
          className="pt-5 pb-10"
        />
        <p className=" text-gray-500 sm:text-base text-md my-3">
          {textContent}
        </p>
        <Button asChild variant="secondary" className=" mt-5">
          <a href={link} target="_blank" className="text-base text-gray-500">
            {translate('projects','button')}
          </a>
        </Button>
      </div>
    </>
  );
};
