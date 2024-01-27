import { CartProduct } from "@/providers/cart";
import Image from "next/image";

interface CheckoutItemProps {
  product: CartProduct;
}
const CheckoutItem = ({ product }: CheckoutItemProps) => {
  return (
    <div className="flex gap-x-3">
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
      <div className="flex flex-col gap-y-3 pt-4">
        <p className="text-sm font-normal">{product.name}</p>
        <p className="text-md font-bold">
          R$ {Number(product.price).toFixed(2)}
        </p>
      </div>
      <div className="absolute right-16 mt-14 text-sm opacity-40">
        Qtd: {product.quantity}
      </div>
    </div>
  );
};

export default CheckoutItem;
