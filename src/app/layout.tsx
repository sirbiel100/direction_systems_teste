import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Direction Systems",
  description: "Teste técnico para a empresa Direction Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
