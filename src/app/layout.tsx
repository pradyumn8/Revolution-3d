import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Revolution — Global Strategic Brand Design Agency",
  description:
    "We are a design company that helps brands define and thrive in culture. Creating influential strategy, brand identity, packaging design and communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
