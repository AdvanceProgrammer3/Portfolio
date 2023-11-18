import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Porfolio Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
