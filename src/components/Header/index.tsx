'use client'
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "./Sidebar";
import { LanguageSelection } from "./language";
import { useLanguage } from "@/context/languageContext";

export const Header = () => {
    const { translate } = useLanguage();

  return (
    <>
      <div className="bg-neutral-50 px-3 py-5 sm:p-10 border-b-2 border-solid">
        <div className="max-[539px]:max-w-100 min-[767px]:min-w-165 xl:min-w-300 align-center justify-between flex ml-auto mr-auto">
          <Image
            src={"/icons/logo2.png"}
            width={100}
            height={100}
            alt="logo"
            className="-my-15"
          />
          <div className="sm:hidden flex gap-5 items-center">
            <LanguageSelection />
            <Sidebar />
          </div>
          <header className="hidden gap-5 justify-end sm:flex items-center">
            <LanguageSelection />
            <Link href="/" className="text-xl ml-4">
              {translate('header','menuA')}
            </Link>
            <Link href="/" className="text-xl">
            {translate('header','menuB')}
            </Link>
            <Link href="/" className="text-xl">
              {translate('header','menuC')}
            </Link>
          </header>
        </div>
      </div>
    </>
  );
};
