"use client";
import { ShoppingBagIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Fragment, useContext, useState } from "react";
import { CartContext, CartProduct } from "@/providers/cart";
import CartItem from "./cart-item";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";
import { Separator } from "./ui/separator";

interface CartProps {
  withSheetClose?: boolean;
}
const Cart = ({ withSheetClose }: CartProps) => {
  const { products, total } = useContext(CartContext);
  const [SheetCloseWrapper, shetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [Fragment, {}];

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
      {products.length > 0 && (
        <div className="flex flex-col">
          <Separator />
          <div className="flex items-center justify-between py-5 text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <div className="flex justify-center">
            <Link href="/checkout">
              <SheetCloseWrapper {...shetCloseWrapperProps}>
                <Button className="btn btn-primary" variant="secondary">
                  Ir para o checkout
                </Button>
              </SheetCloseWrapper>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
