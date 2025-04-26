import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode
}
export const Title = ({ children }: TitleProps, ) => {
  return <h2 className={`sm:text-3xl text-2xl text-gray-700 mb-4 text-center `}>{children}</h2>;
};
