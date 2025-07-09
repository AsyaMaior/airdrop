import type { Metadata } from "next";
import { ReactNode } from "react";
import { Providers } from "./providers";

import "./globals.css";



export const metadata: Metadata = {
  title: "Super SAAS"
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
