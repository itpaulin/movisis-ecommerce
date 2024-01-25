import { ShoppingCart } from "lucide-react";
import Cart from "./ui/cart";
import { ModeToggle } from "./ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex text-center justify-between">
      <ModeToggle />
      <h1 className="font-bold text-3xl text-primary">Movisis Ecommerce</h1>
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
