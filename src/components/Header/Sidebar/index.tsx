import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/languageContext";
import { BookUser, House, Menu } from "lucide-react";
import Link from "next/link";
export const Sidebar = () => {
  const { translate } = useLanguage();

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="bg-slate-100">
          <SheetTitle className="sr-only">menu</SheetTitle>
          <SheetHeader>
            <Link
              href="/"
              className="text-xl flex items-center gap-3 text-gray-700 "
            >
              <House /> {translate("header", "menuA")}
            </Link>
            {/* <Link href="/sobre" className="text-xl flex items-center gap-3">
                Sobre
              </Link> */}
            <Link
              href="/contato"
              className="text-xl gap-3 flex items-center text-gray-700 "
            >
              <BookUser />
              {translate("header", "menuC")}
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
