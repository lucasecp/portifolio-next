'use client'
import Image from "next/image";
import { SmallTile } from "../ui/smalltitle";
import { useLanguage } from "@/context/languageContext";

export const SocialMedia = () => {
    const { translate } = useLanguage();

  return (
    <>
      <div className="justify-self-center">
        <SmallTile>{translate('contact', 'smallTitle')}</SmallTile>
        <div className="flex gap-2 mt-3">
          <a href="https://www.linkedin.com/in/lucas-emerson" target="_blank">
            <Image
              src={"/icons/linkedin.svg"}
              width={50}
              height={50}
              alt="linkedin"
              className=""
            />
          </a>
          <a href="https://github.com/lucasecp" target="_blank">
            <Image
              src={"/icons/github.svg"}
              width={50}
              height={50}
              alt="github"
              className=""
            />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5521973775745" target="_blank">
            <Image
              src={"/icons/whatsapp.svg"}
              width={50}
              height={50}
              alt="whatsapp"
              className=""
            />
          </a>
        </div>
      </div>
    </>
  );
};
