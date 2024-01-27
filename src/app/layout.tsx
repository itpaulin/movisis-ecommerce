import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/header";
import CartProvider from "@/providers/cart";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Paulo Ricardo - Teste Técnico",
  description: "github.com/itpaulin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Header />
            {children}
            <br className="pb-10" />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
