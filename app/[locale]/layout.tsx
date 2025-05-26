import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import {ThemeProvider} from "@/app/provider";
import Header from "@/components/Header";
import {cn} from "@/utils/cn";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent's Portfolio",
  description: "Modern & Minimalist Portfolio Website",
};

export default async function RootLayout({
  children,
  params
}:{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Vincent Le" />
      </head>
      <body
        className={cn(montserrat.className, "bg-white dark:bg-black")}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange={false}
          >
            <Header />
            {children}
            <ContactBox />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
