import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@/lib/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psyche",
  description: "Showcasing our UX design process",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-wrap justify-between items-center">
              <li>
                <div className="flex items-center mb-4">
                  <Image
                    src={"/images/PsycheLogoClear.png"}
                    width={64}
                    height={64}
                    alt={`logo`}
                    className="rounded-lg"
                  />
                  <div className="ml-2">
                    <Link href="/" className="text-xl font-bold">
                      Psyche
                    </Link>
                    <p className="text-sm text-gray-500">
                      Where Personality Meets Performance
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex space-x-4">
                <Link href="/persona" className="hover:text-gray-300">
                  Persona
                </Link>
                <Link href="/scenario" className="hover:text-gray-300">
                  Scenario
                </Link>
                <Link href="/storyboard" className="hover:text-gray-300">
                  Storyboard
                </Link>
                <Link href="/moodboard" className="hover:text-gray-300">
                  Moodboard
                </Link>
                <Link href="/flowchart" className="hover:text-gray-300">
                  Flowchart
                </Link>
                <Link href="/homepagesketch" className="hover:text-gray-300">
                  Website Sketch
                </Link>
                <Link href="/prototype" className="hover:text-gray-300">
                  Prototype
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
