"use client";
import { ShoppingCart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../data/logo.png";
import { NavBarProps } from "./navBar.types";
import { useCartStore } from "@/Storage/Cart";
import { SheetCart } from "../sheet/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const NavBar = ({ text }: NavBarProps) => {
  const { items } = useCartStore();
  const user = true;
  return (
    <>
      <header className="w-full flex items-center justify-center">
        <nav className={`flex justify-between items-center  ${text} w-[65rem]`}>
          <Search className="w-5 h-5" />
          <Link href="#offers" className="hover:underline">
            Ofertas
          </Link>
          {user ? (
            <Link href="#pedidos" className="hover:underline">
              Mis pedidos
            </Link>
          ) : (
            <Link href="#menu" className="hover:underline">
              Menu
            </Link>
          )}

          <Image src={logo} alt="logo" width={84} height={84} />
          <Link href="#contact" className="hover:underline">
            Contactamos
          </Link>
          {user ? (
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Link
              href={"/login"}
              className="px-4 py-2  rounded-full text-white hover:bg-white hover:text-orange-500 transition-colors bg-black"
            >
              Ingresar
            </Link>
          )}

          <SheetCart text={text} count={items.length} />
        </nav>
      </header>
    </>
  );
};
