"use client";
import { ShoppingBagIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext, useState } from "react";
import { CartContext, CartProduct } from "@/providers/cart";
import CartItem from "./cart-item";
import { ScrollArea } from "./scroll-area";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="flex h-full flex-col gap-8">
      <div className="flex flex-row justify-between pr-3">
        <Badge
          className="w-fit gap-3 px-3 text-base uppercase"
          variant="outline"
        >
          <ShoppingBagIcon size={16} />
          Carrinho
        </Badge>
        <Badge className="px-1 text-base">
          Itens totais: {products.length}
        </Badge>
      </div>
      <ScrollArea>
        <div className="flex h-full flex-col gap-8">
          {products.length > 0 ? (
            products.map((product: CartProduct) => {
              return <CartItem key={product.id} product={product} />;
            })
          ) : (
            <p className="text-center font-semibold">
              Carrinho vazio. Clique em algum item para comprar
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Cart;
