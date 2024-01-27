"use client";
import { CartContext, CartProduct } from "@/providers/cart";
import { useContext, useState } from "react";
import CheckoutItem from "./components/checkout-item";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { products, total, finishPurchase } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const router = useRouter();

  const handleFinishPurchase = () => {
    finishPurchase();
    setShowAlert(true);
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        router.push("/");
      }, 5000);
    });
  };
  return (
    <div>
      {showAlert ? (
        <div className="flex flex-col items-center p-10">
          <Alert className="w-[700px] text-center">
            <CheckCheckIcon className="h-6 w-6" />
            <AlertTitle>Compra realizada com sucesso!</AlertTitle>
            <AlertDescription>
              Redirecionando voce para a pagina inicial em 5 segundos...
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        <div>
          <div className="m-8 flex flex-col gap-y-6 rounded-lg border p-8">
            {products.map((product: CartProduct) => (
              <CheckoutItem product={product} />
            ))}
            <Separator />
            <div className="flex items-center justify-between py-5 text-lg font-bold">
              <p>Total</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button onClick={handleFinishPurchase}>Finalizar a compra</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
