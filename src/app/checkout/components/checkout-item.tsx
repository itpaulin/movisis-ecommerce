import { CartProduct } from "@/providers/cart";
import Image from "next/image";

interface CheckoutItemProps {
  product: CartProduct;
}
const CheckoutItem = ({ product }: CheckoutItemProps) => {
  return (
    <div className="flex">
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
    </div>
  );
};

export default CheckoutItem;
