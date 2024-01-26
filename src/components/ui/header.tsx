"use client";
import { ShoppingCart } from "lucide-react";
import Cart from "./cart";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { Badge } from "./badge";

const Header = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="mb-10 flex justify-between px-6 pt-7 text-center">
      <ModeToggle />
      <h1 className="text-lg font-semibold ">
        <span className="text-primary">Movisis</span> Ecommerce
      </h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCart size={24} />
            <Badge
              variant="secondary"
              className="absolute right-4 top-5 flex w-[0.5px] items-center justify-center text-center"
            >
              <p className="text-center"> {products.length}</p>
            </Badge>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Cart />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
