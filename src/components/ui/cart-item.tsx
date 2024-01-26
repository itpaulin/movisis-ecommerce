import { CartContext, CartProduct } from "@/providers/cart";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";
interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeProductToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  return (
    <div className="w- mb-4 flex h-[5rem] gap-3">
      <div className=" flex h-[5rem] w-[5rem] flex-col items-center justify-center rounded-md bg-accent">
        <Image
          src={product.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
          alt={product.name}
        />
      </div>
      <div className="flex w-40 flex-col">
        <p className="overflow-hidden text-ellipsis text-nowrap text-sm font-normal">
          {product.name}
        </p>
        <p className="text-md font-bold">
          R$ {Number(product.price).toFixed(2)}
        </p>
        <div className="flex w-2/6 flex-row items-center gap-3 pt-1">
          <Button
            size="icon"
            className="h-8 w-8"
            variant={"outline"}
            onClick={() => decreaseQuantity(product)}
            disabled={product.quantity === 1}
          >
            <Minus size={16} />
          </Button>
          {product.quantity}
          <Button
            size="icon"
            className="h-8 w-8"
            variant={"outline"}
            onClick={() => increaseQuantity(product)}
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="w-6 pt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeProductToCart(product)}
        >
          <Trash size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
