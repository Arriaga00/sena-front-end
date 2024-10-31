"use client";
import {
  CategoryMenu,
  pizzas,
  Product,
  hamburguesas,
  tacos,
  sandwiches,
  bebidas,
} from "@/data/data";

import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const HomeFood = () => {
  const [categories, setCategories] = useState<Product[]>(pizzas);
  const [selected, setSelected] = useState<Number>(0);
  return (
    <>
      <section className="w-full">
        <div className="flex justify-between mt-16">
          {CategoryMenu.map((item, index) => (
            <div key={index} className={`text-center cursor-pointer`}>
              <Badge
                onClick={() => {
                  setCategories(
                    item.nombre === "Pizza"
                      ? pizzas
                      : item.nombre === "Hamburguesa"
                      ? hamburguesas
                      : item.nombre === "Taco"
                      ? tacos
                      : item.nombre === "Sandwich"
                      ? sandwiches
                      : bebidas
                  );
                  setSelected(index);
                }}
                variant="secondary"
                className={`py-2 px-4 text-sm ${
                  index === selected ? "bg-orange-100 text-orange-400" : ""
                }`}
              >
                {item.nombre}
                <img
                  src={item.icon}
                  alt={item.nombre}
                  className="w-7 h-7 ml-2"
                />
              </Badge>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={`/detalle/${item.category}/${item.id}`}
              className="border rounded-xl h-full flex flex-col justify-between"
            >
              <picture>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="rounded-md mx-auto mb-4 object-center h-56 w-full "
                />
              </picture>
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">{item.nombre}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  {item.descripcion}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex -space-x-2">
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Select
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
