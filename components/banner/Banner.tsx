"use client";
import { Star } from "lucide-react";
import { pizzas } from "@/data/data";

export const Banner = () => {
  return (
    <>
      <section className="w-[60rem] flex items-center justify-center flex-col pb-10">
        <div className="flex items-center justify-between   w-full">
          <div className="relative w-96 h-96">
            <img
              src={pizzas[0].imagen}
              alt="Mexican Pizza"
              className="rounded-full object-cover object-center h-96 border-4 border-black"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-white mb-2">
              {pizzas[0].nombre}
            </h2>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-300 fill-current"
                />
              ))}
            </div>
            <p className="text-white mb-4">{pizzas[0].descripcion}</p>
            <button className="px-6 py-2 bg-white text-orange-400 rounded-full font-semibold hover:bg-orange-100 transition-colors">
              Comprar ahora
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
