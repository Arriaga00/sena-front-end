"use client";
import { ShoppingCart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../data/logo.png";
import { NavBarProps } from "./navBar.types";
import { useCartStore } from "@/Storage/Cart";
export const NavBar = ({ text }: NavBarProps) => {
  const { items } = useCartStore();
  return (
    <>
      <header className="w-full flex items-center justify-center">
        <nav className={`flex justify-between items-center  ${text} w-[65rem]`}>
          <Search className="w-5 h-5" />
          <Link href="#offers" className="hover:underline">
            Ofertas
          </Link>
          <Link href="#menu" className="hover:underline">
            Menu
          </Link>
          <Image src={logo} alt="logo" width={84} height={84} />
          <Link href="#contact" className="hover:underline">
            Contactamos
          </Link>
          <button className="px-4 py-2  rounded-full text-white hover:bg-white hover:text-orange-500 transition-colors bg-black">
            Ingresar
          </button>
          <Link href={"/cart"} className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span
              className={`absolute -top-2 -right-2 bg-red-500 ${text} rounded-full w-5 h-5 flex items-center justify-center text-xs text-white`}
            >
              {items.length}
            </span>
          </Link>
        </nav>
      </header>
    </>
  );
};
