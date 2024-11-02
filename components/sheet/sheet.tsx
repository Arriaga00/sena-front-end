import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/Storage/Cart";
import { ShoppingCart } from "lucide-react";

export function SheetCart({ text, count }: { text: string; count: number }) {
  const { getCart } = useCartStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span
            className={`absolute -top-2 -right-2 bg-red-500 ${text} rounded-full w-5 h-5 flex items-center justify-center text-xs text-white`}
          >
            {count}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrito de compras</SheetTitle>
          <SheetDescription>
            Verifica bien tus pedidos antes de realizar la compra.
          </SheetDescription>
        </SheetHeader>
        {/* content */}
        <div className="flex flex-col gap-2">
          {getCart().map((item) => (
            <article className="rounded-lg border border-gray-200 p-4">
              <div
                key={item.id}
                className="flex items-center gap-2 justify-between"
              >
                <p className="flex items-center gap-2">{item.name}</p>
                <p className="font-bold">${item.price}</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>{item.adicional.map((item) => item.name).join(", ")}</p>
                <p className="font-bold">
                  ${item.adicional.map((item) => item.price).join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="mt-2">
              Pedir
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
