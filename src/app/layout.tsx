import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Karla, Poppins } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../../libs/react-query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic",],
  preload: true,
  display: "swap",
  variable: "--font-inter"
});


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  preload: true,
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "STARWARS",
  keywords: ["galaxy", "science", "fiction", "wars"],
  description: "A modern web starwars application",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${karla.variable} ${poppins.variable} dark:bg-gray-900 dark:text-white transition-colors duration-500 `}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
