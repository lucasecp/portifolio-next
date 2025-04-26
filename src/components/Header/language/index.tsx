"use client";
import { useLanguage } from "@/context/languageContext";
import { ReactNode } from "react";

interface LanguageStyledProps {
  children: ReactNode;
  languageChosen: "pt" | "en";
}

const LanguageStyled = ({ children, languageChosen }: LanguageStyledProps) => {
  const { language, toggleLanguage } = useLanguage();
  
  const handleClick = () =>{
    if(language === languageChosen ){
      return
    }
    toggleLanguage()
  }

  return (
    <button
      onClick={handleClick}
      className={`${
        language === languageChosen ? "border-b-1 border-black text-black" : ""
      } cursor-pointer`}
    >
      {children}
    </button>
  );
};

export const LanguageSelection = () => {

  return (
    <>
      <div className=" text-sm text-gray-500 flex items-center gap-2 cursor-pointer">
        <LanguageStyled languageChosen="pt">PT</LanguageStyled>|
        <LanguageStyled languageChosen="en">EN</LanguageStyled>
      </div>
    </>
  );
};
