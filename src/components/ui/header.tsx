import { ShoppingCart } from "lucide-react";
import Cart from "./cart";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";

const Header = () => {
  return (
    <div className="flex text-center justify-between mb-10 pt-7 px-6">
      <ModeToggle />
      <h1 className="font-semibold text-lg ">
        <span className="text-primary">Movisis</span> Ecommerce
      </h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCart size={24} />
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
