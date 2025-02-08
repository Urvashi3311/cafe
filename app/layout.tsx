import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const redHatText = Red_Hat_Text({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Store",
  description: "Experience the Perfect Blend of Taste and Ambiance",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*  Google Analytics Tracking Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-F7YBFXQSBD`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F7YBFXQSBD', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${redHatText.className} text-base text-rose-900 bg-rose-50 relative`}
      >
        {children}
      </body>
    </html>
  );
}
