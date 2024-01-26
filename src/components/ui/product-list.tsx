"use client";

import { Product } from "@prisma/client";
import ProductItem from "./product-item";
import { useEffect, useState } from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ArrowsUpFromLine, ListFilterIcon, ListOrdered } from "lucide-react";
import { Input } from "./input";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [filter, setFilter] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [sort, setSort] = useState("price");
  const handleFilterChange = (value: string) => {
    setFilter(value);
  };
  const handleSortChange = (value: string) => {
    setSort(value);
  };
  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.price.toString() === filter ||
        new Date(product.inclusionDate).toLocaleDateString() === filter,
    )
    .sort((a, b) => {
      if (sort === "SmallerToBiggest") {
        return Number(a.price) - Number(b.price);
      } else if (sort === "inclusionDate") {
        return (
          new Date(a.inclusionDate).getTime() -
          new Date(b.inclusionDate).getTime()
        );
      } else if (sort === "BiggestToSmaller") {
        return Number(b.price) - Number(a.price);
      } else {
        return 0;
      }
    });
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  useEffect(() => {
    if (!showFilter) {
      setFilter("");
    }
  }, [showFilter]);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Button className=" gap-1" onClick={handleShowFilter}>
          <ListFilterIcon size={16} />
          Filtrar produtos
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-24" asChild>
            <Button variant="outline" className="gap-1" size="icon">
              <ListOrdered size={16} />
              Ordenar
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => handleSortChange("SmallerToBiggest")}
            >
              Valor mais baixo
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleSortChange("BiggestToSmaller")}
            >
              Valor mais alto
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange("inclusionDate")}>
              Data de inclusão
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {showFilter && (
        <div className="flex flex-row gap-4 py-5">
          <Input
            type="text"
            placeholder="Filtre pelo nome, preço ou data de inclusão"
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="w-[90%]"
          />
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 pt-4 md:grid-cols-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
