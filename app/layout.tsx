import "./globals.css";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased m-0 w-screen h-screen `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
