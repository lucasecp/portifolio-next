'use client'
import { useLanguage } from "@/context/languageContext";
import { Button } from "../ui/button";
import { Skills } from "./skills";
import { Download } from 'lucide-react';
export const About = () => {
    const { translate } = useLanguage();

  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:items-start relative">
          <h2 className="sm:text-5xl text-4xl text-gray-900 mb-1">{translate('about','titleA')}</h2>
          <h3 className="sm:text-2xl text-lg text-gray-700 mb-4">
          {translate('about','titleB')}
          </h3>
          
          <p className="sm:text-2xl text-lg text-gray-500">
        {  translate('about','titleC')}
          </p>
          <div className="flex flex-col items-center justify-center">
          <div className="bg-[url(/images/lucasprofile.PNG)] sm:size-60 md:hidden size-40 rounded-full bg-center bg-cover "/>
          <Button size='lg' asChild  className="mt-3 mb-9">
            <a href="/images/curriculo.pdf" download className="flex gap-1">
            <Download/>  {translate('about','button')}
            </a>
          </Button>
          </div>
        <Skills />
        </div>
          <div className="bg-[url(/images/lucasprofile.PNG)] hidden md:block size-70 lg:size-90 rounded-full bg-center bg-cover"></div>
      </div>
    </>
  );
};
