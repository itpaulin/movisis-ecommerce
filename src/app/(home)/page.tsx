import ProductItem from "@/components/ui/product-item";
import ProductList from "@/components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const products = await prismaClient.product.findMany();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
