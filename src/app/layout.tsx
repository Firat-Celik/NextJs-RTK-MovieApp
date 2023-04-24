import { Inter } from "@next/font/google";

import "@main/styles/reset.css";
import "@main//styles/variables.css";
import "@main//styles/global.css";

import { Header } from "@main/components/header";
import { Footer } from "@main/components/footer";

const interFontFamily = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={interFontFamily.className}>
      <body className="container">
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  );
}
