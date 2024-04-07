import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavbarComponent from "@/component/NavbarComponent";
import FooterComponent from "@/component/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    type: "website",
    url: "https://www.istad.co/",
    title: "Center of Science and Technology Advanced Development",
    description: "NEXT-ORA is a noteworthy science and technology center in Cambodia. NEXT-ORA has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.",
    images: [
      {
        url: 'https://www.istad.co/resources/img/istad-thumbnail.png',
        alt: 'ISTAD Thumbnail',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] ">
        <header className=" sticky top-0 z-50">
          <NavbarComponent />
        </header>
        {children}
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
