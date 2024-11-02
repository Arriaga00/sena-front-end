import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Cart } from "./cart.types";

interface CartState {
  items: Cart[];
  getCart: () => Cart[];
  addItem: (item: Cart) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    devtools((set, get) => ({
      items: [],
      getCart: () => get().items,
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    })),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);
