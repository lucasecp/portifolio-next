import { ReactNode } from "react";

interface SmallTileProps {
  children: ReactNode
}
export const SmallTile = ({ children }: SmallTileProps, ) => {
  return <h2 className='text-2xl text-gray-900 mb-1'>{children}</h2>;
};
