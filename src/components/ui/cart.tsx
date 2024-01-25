"use client";
import { ShoppingBagIcon } from "lucide-react";
import { Badge } from "./badge";
import { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="flex h-full flex-col gap-8">
      <div className="flex flex-row justify-between pr-3">
        <Badge
          className="w-fit px-3 text-base uppercase gap-3"
          variant="outline"
        >
          <ShoppingBagIcon size={16} />
          Carrinho
        </Badge>
        <Badge className="text-base px-1">Itens totais: {quantity}</Badge>
      </div>
    </div>
  );
};

export default Cart;
