import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/provider";
import Header from "@/components/Header";
import {cn} from "@/utils/cn";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import MyExperience from "@/components/MyExperience";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent's Portfolio",
  description: "Modern & Minimalist Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(montserrat.className, "bg-white dark:bg-black")}
      >
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange={false}
        >
          <Header />
          {children}
          <ContactBox />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
