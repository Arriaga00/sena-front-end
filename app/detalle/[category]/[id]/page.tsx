import { Star, ChevronLeft } from "lucide-react";
import Link from "next/link";
import {
  pizzas,
  tacos,
  hamburguesas,
  sandwiches,
  bebidas,
  Product,
  Categories,
} from "@/data/data";
import { NavBar } from "@/components/nav";
import { Order } from "@/components/order";

interface DetailsProps {
  params: {
    id: string;
    category: Categories;
  };
}

export default function Details({ params: { id, category } }: DetailsProps) {
  const categories: Record<Categories, Product[]> = {
    Pizza: pizzas,
    Taco: tacos,
    Hamburguesa: hamburguesas,
    Sandwich: sandwiches,
    Bebida: bebidas,
  };

  if (!categories[category]) {
    return console.error("Categoría no encontrada");
  }

  const productId = Number(id);

  const productDetail = categories[category].find(
    (item) => item.id === productId
  );

  if (!productDetail) {
    return console.error("Producto no encontrado");
  }

  const randomProducts: Product[] = [];

  if (categories[category]) {
    const products = categories[category];

    while (randomProducts.length < 3) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];

      if (!randomProducts.includes(randomProduct)) {
        randomProducts.push(randomProduct);
      }
    }
  }

  return (
    <>
      <header>
        <NavBar text="text-black" />
      </header>
      <div className="min-h-screen ">
        <main className="container mx-auto  p-4">
          <Link
            href={"/"}
            className="flex items-center text-black mb-6 font-bold hover:text-orange-500 w-36"
          >
            <ChevronLeft className="w-5 h-5 mr-2 " />
            Ir la Menu
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={productDetail.imagen}
                alt={productDetail.nombre}
                width={400}
                height={400}
                className="rounded-lg w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            </div>

            <div className="text-black">
              <h1 className="text-4xl font-bold mb-2">
                {productDetail.nombre}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-300 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm">(128 reviews)</span>
              </div>
              <p className="mb-6">{productDetail.descripcion}</p>

              <Order
                price={productDetail.precio}
                quantity={"4 piezas"}
                name={productDetail.nombre}
                image={productDetail.imagen}
                category={productDetail.category}
                id={productDetail.id}
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black mb-4">
              Te puede gustar también
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {randomProducts.map((pizza, index) => (
                <div
                  key={index}
                  className="bg-amber-200 rounded-lg p-4 shadow-lg flex justify-between gap-2 flex-col"
                >
                  <img
                    src={pizza.imagen}
                    alt={pizza.nombre}
                    width={200}
                    height={500}
                    className="rounded-full mx-auto mb-4 object-cover object-center h-56 w-full"
                  />
                  <h3 className="text-xl font-semibold mb-2">{pizza.nombre}</h3>

                  <p className="line-clamp-3">{pizza.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">${pizza.precio}</span>
                  </div>
                  <button className="w-full mt-4 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors">
                    Añadir al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
