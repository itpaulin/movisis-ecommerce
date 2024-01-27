"use client";
import { Product } from "@prisma/client";
import { Preahvihear } from "next/font/google";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  addProductToCart: (product: CartProduct) => void;
  removeProductToCart: (product: CartProduct) => void;
  increaseQuantity: (product: CartProduct) => void;
  decreaseQuantity: (product: CartProduct) => void;
  total: number;
  finishPurchase: () => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  addProductToCart: () => {},
  removeProductToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  total: 0,
  finishPurchase: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>(
    JSON.parse(
      localStorage.getItem("@ecommerce-movisis/cart-products") || "[]",
    ),
  );
  const addProductToCart = (product: CartProduct) => {
    if (products.some((cartProduct) => cartProduct.id === product.id)) {
      setProducts((prev) =>
        prev.map((cartProduct: CartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );
      return;
    }

    setProducts((prev) => [...prev, product]);
  };
  const removeProductToCart = (product: CartProduct) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== product.id),
    );
  };
  const increaseQuantity = (product: CartProduct) => {
    setProducts((prev) => {
      return prev.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      });
    });
  };
  const decreaseQuantity = (product: CartProduct) => {
    setProducts((prev) => {
      return prev.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }
        return cartProduct;
      });
    });
  };
  const finishPurchase = () => {
    setProducts([]);
  };
  const total = useMemo(() => {
    return products.reduce((acc: number, curr: CartProduct) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      "@ecommerce-movisis/cart-products",
      JSON.stringify(products),
    );
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        removeProductToCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotalPrice: 0,
        total,
        finishPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
