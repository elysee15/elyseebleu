import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const clash = localFont({
  src: "./styles/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Elysée Bleu",
  description: "I'm a Frontend Developer",
};

const menuItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${clash.variable} font-sans text-slate-800`}
      >
        <header className="container py-5 flex items-center justify-between">
          <Link href={"/"}>
            <Avatar>
              <AvatarImage src="https://avatar.vercel.sh/Elysee-Bleu" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              {menuItems.map((item) => (
                <li key={"nav__item__" + item}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
