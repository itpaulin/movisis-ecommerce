"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBasketIcon } from "lucide-react";
import { CartContext } from "@/providers/cart";

interface ProductItemProps {
  product: Product | null;
}
/**
 * Esse componente renderiza um unico produto
 * @param product Recebe o produto em questão a ser renderizado
 * @returns UI de um produto
 */
const ProductItem = ({ product }: ProductItemProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { addProductToCart } = useContext(CartContext);
  if (product) {
    return (
      <div
        className="flex w-[170px] flex-col "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <Button
            onClick={() => {
              addProductToCart({ ...product, quantity: 1 });
            }}
            className="mb-4 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-md bg-accent"
          >
            <ShoppingBasketIcon size={40} />
            Comprar
          </Button>
        ) : (
          <div className="mb-4 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-md bg-accent">
            <Image
              src={product.imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{ objectFit: "contain" }}
              alt={product.name}
            />
            <p className="text-sm opacity-50">
              {String(product.inclusionDate).slice(4, 15)}
            </p>
          </div>
        )}
        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <p className=" overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            R$ {Number(product.price).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
};

export default ProductItem;
