import type { Metadata } from "next";
import StoreProvider from "./controller/store/StoreProvider";
import "./globals.css";
import { HeaderMain } from "./components/header/headermain/headerMain";

export const metadata: Metadata = {
  title: "Woodview Estate",
  description: "Wood View Estate, Toronto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <header>
            <HeaderMain />
          </header>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
