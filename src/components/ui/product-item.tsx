import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product | null;
}

const ProductItem = ({ product }: ProductItemProps) => {
  if (product) {
    return (
      <div className="flex flex-col w-[170px] ">
        <div className="flex flex-col bg-accent w-[170px] h-[170px] flex justify-center items-center rounded-md mb-4">
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
        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <p className=" font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            R$ {Number(product.price).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
};

export default ProductItem;
