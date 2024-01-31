import ProductItem from "@/components/product-item";
import ProductList from "@/components/product-list";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const products = await prismaClient.product.findMany();

  return (
    <div className="px-10">
      <ProductList products={products} />
    </div>
  );
}
