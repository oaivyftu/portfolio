import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import {ThemeProvider} from "@/app/provider";
import Header from "@/components/Header";
import {cn} from "@/utils/cn";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {siteConfig} from "@/data/site";

const montserrat = Montserrat({ subsets: ["latin"] });

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const t = await getTranslations({locale, namespace: 'seo'});

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('title'),
      template: `%s | ${siteConfig.name}`,
    },
    description: t('description'),
    applicationName: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: t('title'),
      description: t('description'),
      locale,
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
    },
  };
}

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
  const t = await getTranslations({locale, namespace: 'seo'});

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: t('description'),
    email: siteConfig.email,
    founder: {"@type": "Person", name: siteConfig.founder},
    sameAs: [siteConfig.linkedin],
  };

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content={siteConfig.shortName} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd)}}
        />
      </head>
      <body
        className={cn(montserrat.className, "bg-white dark:bg-black")}
      >
        <NextIntlClientProvider>
          <ThemeProvider defaultTheme="dark">
            <div className="site-shell">
              <Header />
              {children}
              <ContactBox />
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
