"use client";
import { Minus, Plus } from "lucide-react";
import { OrderProps, Additional } from "./order.types";
import { useState, useCallback, useEffect } from "react";
import { useCartStore } from "../../Storage/Cart";

export const Order = ({
  price: initialPrice,
  quantity: initialQuantity,
  name,
  image,
  category,
  id,
}: OrderProps) => {
  const [additional, setAdditional] = useState<Additional[]>([
    {
      name: "Gaseosa litro",
      quantity: 0,
      price: 7000,
    },
  ]);
  const { addItem } = useCartStore();
  const [selectQuantity, setSelectQuantity] = useState<number>(0);
  const [order, setOrder] = useState({
    price: initialPrice,
    quantity: initialQuantity,
    name,
    image,
    category,
    id,
    comment: "",
  });

  const calculateTotalPrice = useCallback(() => {
    const basePrice = [20000, 35000, 50000][selectQuantity] || initialPrice;
    const additionalPrice = additional.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return basePrice + additionalPrice;
  }, [selectQuantity, additional, initialPrice]);

  useEffect(() => {
    setOrder((prev) => ({ ...prev, price: calculateTotalPrice() }));
  }, [calculateTotalPrice]);

  const handleSizeChange = useCallback((size: string, index: number) => {
    setSelectQuantity(index);
    setOrder((prev) => ({ ...prev, quantity: size }));
  }, []);

  const handleQuantityChange = useCallback((index: number, change: number) => {
    setAdditional((prev) => {
      const newAdditional = [...prev];
      const newQuantity = Math.max(0, newAdditional[index].quantity + change);
      if (newAdditional[index].quantity !== newQuantity) {
        newAdditional[index] = {
          ...newAdditional[index],
          quantity: newQuantity,
        };
        return newAdditional;
      }
      return prev;
    });
  }, []);

  const handleAddToCart = () => {
    console.log({ ...order, additional });
    const pedido = {
      ...order,
      adicional: additional,
    };
    addItem(pedido);
  };

  return (
    <>
      <div className="mb-6">
        {category === "Pizza" && (
          <>
            <h2 className="text-xl font-semibold mb-2">Seleccionar tamaño</h2>
            <div className="flex space-x-4">
              {["4 piezas", "8 piezas", "12 piezas"].map((size, i) => (
                <button
                  onClick={() => handleSizeChange(size, i)}
                  key={size}
                  className={`px-4 py-2 rounded-full bg-white text-black-400 transition-colors ${
                    selectQuantity === i
                      ? "bg-amber-100 text-orange-400 font-bold"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="mb-6">
        <div className="space-y-2">
          {category !== "Bebida" && (
            <>
              <h2 className="text-xl font-semibold mb-2">Añadidos</h2>
              {additional.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span>
                    {item.name} (+${item.price})
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="w-6 h-6 bg-amber-100 text-orange-500 rounded-full flex items-center justify-center"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="w-6 h-6 bg-amber-100 text-orange-500 rounded-full flex items-center justify-center"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
          <div>
            <label htmlFor="comment" className="text-xl font-bold">
              Información adicional
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              value={order.comment}
              onChange={(e) => setOrder({ ...order, comment: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg resize-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">${calculateTotalPrice()}</div>
        <button
          onClick={handleAddToCart}
          className="px-6 py-3 bg-white text-orange-400 rounded-full font-semibold hover:bg-orange-100 transition-colors"
        >
          Añadir al carrito
        </button>
      </div>
    </>
  );
};
