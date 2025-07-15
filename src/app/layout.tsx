import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Infinity - Smart Building Platform & GACS Compliance",
    template: "%s | Infinity"
  },
  description: "Infinity biedt innovatieve smart building oplossingen en GACS-compliant diensten voor duurzame gebouwen. Ontdek onze platform en diensten voor de toekomst van gebouwbeheer.",
  keywords: ["smart building", "GACS", "gebouwbeheer", "duurzaamheid", "IoT", "building automation", "energy management"],
  authors: [{ name: "Infinity" }],
  creator: "Infinity",
  publisher: "Infinity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infinity.nl'), // Vervang met je eigen domein
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://infinity.nl',
    title: 'Infinity - Smart Building Platform & GACS Compliance',
    description: 'Infinity biedt innovatieve smart building oplossingen en GACS-compliant diensten voor duurzame gebouwen.',
    siteName: 'Infinity',
    images: [
      {
        url: '/og-image.jpg', // Voeg een OG image toe
        width: 1200,
        height: 630,
        alt: 'Infinity Smart Building Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinity - Smart Building Platform & GACS Compliance',
    description: 'Infinity biedt innovatieve smart building oplossingen en GACS-compliant diensten voor duurzame gebouwen.',
    images: ['/og-image.jpg'], // Zelfde image als OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Voeg je Google Search Console verification code toe
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infinity",
              "url": "https://infinity.nl",
              "logo": "https://infinity.nl/Infinity%20Logo%20RGB%20Black.svg",
              "description": "Infinity biedt innovatieve smart building oplossingen en GACS-compliant diensten voor duurzame gebouwen.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://linkedin.com/company/infinity",
                "https://twitter.com/infinity"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
